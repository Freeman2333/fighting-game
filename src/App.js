import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ChooseFighter from "./pages/ChooseFighter/ChooseFighter";
import Fight from "./pages/Fight ";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root{
    max-width:1440px;
    width:100%;
    min-height:100vh;
   
    margin: 0 auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<ChooseFighter />} />
          <Route path="/fight" element={<Fight />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
