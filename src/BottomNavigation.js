import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 flex justify-around">
      <NavLink
        to="/"
        className="text-gray-600"
        activeclassname="text-blue-500"
        exact={true.toString()}
      >
        Home
      </NavLink>
      <NavLink
        to="/mycollection"
        className="text-gray-600"
        activeclassname="text-blue-500"
        exact={true.toString()}
      >
        My Collection
      </NavLink>
    </nav>
  );
};

export default BottomNavigation;
