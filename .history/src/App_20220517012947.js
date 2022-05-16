import { Route, Routes } from "react-router-dom";
import Home from "./components/Router-Practice/Home/Home";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path=""
        <Route path="/" element={<Home />} />

      </Routes>

    </div>
  );
}

export default App;
