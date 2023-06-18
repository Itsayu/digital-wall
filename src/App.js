import React from 'react';
import HomePage from './component1/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SecondPage from './component2/SecondPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;