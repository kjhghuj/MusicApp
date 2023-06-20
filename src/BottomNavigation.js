import { NavLink } from 'react-router-dom';
import { HomeIcon, CollectionIcon, PlayIcon } from './icons';

const BottomNavigation = () => {
  return (
    <nav className="bg-green-500 fixed bottom-0 left-0 w-full flex justify-between px-4 py-2">
      <NavLink
        to="/"
        exact="true"
        className="flex flex-col items-center text-white"
        activeclassname="font-bold"
      >
        <HomeIcon size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/collection"
        className="flex flex-col items-center text-white"
        activeclassname="font-bold"
      >
        <CollectionIcon size={20} />
        <span>Collection</span>
      </NavLink>
      <NavLink
        to="/play"
        className="flex flex-col items-center text-white"
        activeclassname="font-bold"
      >
        <PlayIcon size={20} />
        <span>Play</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavigation;
