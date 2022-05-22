//Router practice
// ============================


//EcommerSite practice 
//==========================
import Home from "./components/Shopifal/layout/Frontend/Home";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/" element={<Home />}>
          <Route path="contact" element={<h3>This is outlet</h3>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>

      <Home/>
      



    </div>
  );
}

export default App;
