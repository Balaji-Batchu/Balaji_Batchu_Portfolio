import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Contact} from './Components/contact'
import {Sidebar} from './Components/sidebar'
import {About} from './Components/about'
import {Code} from './Components/code'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code />} />
    </Routes>
  );
}

export default App;

// console.log(<Code />)


// import React, { lazy, Suspense } from "react";
// import { Routes, Route } from 'react-router-dom';
// import { Sidebar } from './Components/sidebar';
// import {About} from './Components/about'
// import  Loading  from './Components/loader';

// const Contact = lazy(() => import('./Components/contact'));
// // const About = lazy(() => import('./Components/about'));
// const Code = lazy(() => import('./Components/code'));

// function App() {
//   return (
//     <Suspense fallback={<Loading />}>
//         <Routes>
//             <Route path="/" element={<Sidebar />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/code" element={<Code />} />
//             <Route path="/contact" element={<Contact />} />
//         </Routes>
//     </Suspense>
//   );
// }

// export default App;