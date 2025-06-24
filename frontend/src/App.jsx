import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./components/Landing";
const AppContainer = styled.div`
  // display: flex;
  height: 100vh;
  width: 100vw;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Disable horizontal scrolling */
  background-color: #ecf0f1;
`;


const App = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Add more routes here */}
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
