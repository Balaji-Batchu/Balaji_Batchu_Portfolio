import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Contact} from './Components/contact'
import {Sidebar} from './Components/sidebar'
import {About} from './Components/about'
import {Code} from './Components/code'
import {Loading} from './Components/loader'

function App() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
    <div>
      <BrowserRouter>
        {isMobile ? (
          <div className="mobile-view-message">
            <p className='text-xl font-merri flex items-center justify-center h-screen w-screen bg-yellow-300 text-black font-semibold'>please open in desktop (or desktop site) for better experience</p>
          </div>
        ) : (
          <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Sidebar />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/code" element={<Code />} />
            </Routes>
          </Suspense>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
