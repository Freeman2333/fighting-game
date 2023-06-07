import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChooseFighter from "./pages/ChooseFighter";
import Fight from "./pages/Fight ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseFighter />} />
        <Route path="/fight" element={<Fight />} />
      </Routes>
    </Router>
  );
}

export default App;
