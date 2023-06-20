import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PlayPage from './PlayPage';
import MyCollection from './MyCollection';
import BottomNavigation from './BottomNavigation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playpage" element={<PlayPage />} />
        <Route path="/mycollection" element={<MyCollection />} />
      </Routes>
      <BottomNavigation />
    </Router>
  );
};

export default App;
