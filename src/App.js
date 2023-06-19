import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import MyCollection from './MyCollection';
import BottomNavigation from './BottomNavigation';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mycollection">My Collection</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mycollection" element={<MyCollection />} />
        </Routes>

        <BottomNavigation />
      </div>
    </Router>
  );
};

export default App;
