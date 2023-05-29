import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Contact} from './Components/contact'
import {Sidebar} from './Components/sidebar'
import {About} from './Components/about'
import {Code} from './Components/code'
import {Loading} from './Components/loader'
import {Phone} from './Components/phone'

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
            <Phone />
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

// import React, { Suspense } from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import {Contact} from './Components/contact'
// import {Sidebar} from './Components/sidebar'
// import {About} from './Components/about'
// import {Code} from './Components/code'
// //import {Loading} from './Components/loader'

// function App() {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Sidebar />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/code" element={<Code />} />
//         </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;