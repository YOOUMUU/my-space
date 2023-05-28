'use client';

import { useState } from 'react';
import MenuButton from './MenuButton';
import NavLinkList from './NavLinkList';

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu} />
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col p-4 absolute top-20 left-0 right-0 bg-gray-950">
          <NavLinkList />
        </div>
      )}
      <div className="hidden sm:flex">
        <NavLinkList />
      </div>
    </div>
  );
};

export default NavMenu;
