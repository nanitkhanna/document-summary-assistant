import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SummaryPage } from "./pages";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
