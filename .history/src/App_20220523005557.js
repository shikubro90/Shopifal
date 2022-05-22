//Router practice
// ============================
// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./components/Router-Practice/Home/Home";
// import About from "./components/Router-Practice/About/About";
// import Posts from "./components/Router-Practice/Posts/Posts";
// import NotFound from "./components/Router-Practice/NotFound/NotFound";

//EcommerSite practice 
//==========================

import Home from "./components/Shopifal/layout/Frontend/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      {/* <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/" element={<Home />}>
          <Route path="contact" element={<h3>This is outlet</h3>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes> */}

      {
        <Routes>
          <Route path="/" />
          <Route path="/" element={<Home/>}/>
        </Routes>
      }
      
      



    </div>
  );
}

export default App;
