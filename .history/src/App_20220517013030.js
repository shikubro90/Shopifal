import { Route, Routes } from "react-router-dom";
import Home from "./components/Router-Practice/Home/Home";
import NotFound from "./components/Router-Practice/NotFound/NotFound";
function App() {
  return (
    <div className="App">

      <Routes>
        <Rout
        <Route path="/" element={<Home />} />

      </Routes>

    </div>
  );
}

export default App;
