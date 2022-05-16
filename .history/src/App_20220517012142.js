import { Routes } from "react-router-dom";
import Home from "./components/R";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
