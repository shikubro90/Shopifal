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
import Product from "./components/Shopifal/layout/Frontend/Product";
import AllCategory from "./components/Shopifal/layout/Frontend/AllCategory";
import Login from './components/Shopifal/layout/Frontend/Login'
import SingUp from './components/Shopifal/layout/Frontend/SignUp'
import Error from "./components/Shopifal/layout/Frontend/Error";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Shopifal/sections/NavBar'
import Dashboard from './components/Shopifal/layout/Backend/Dashboard'
import PrivateOutlet from "./components/Shopifal/PrivateOutlate/PrivateOutlet";



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
        <>
          <NavBar/>
          <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/allcategory" element={<AllCategory/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SingUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/*" element={<PrivateOutlet/>}>
                <rou
            </Route>
          </Routes>
        </>
      }
      
      



    </div>
  );
}

export default App;
