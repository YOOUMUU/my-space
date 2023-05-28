'use client';

import { useState } from 'react';
import NavLink from './NavLink';
import MenuButton from './MenuButton';

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
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Notes</NavLink>
          <NavLink href="/user">Users</NavLink>
        </div>
      )}
      <div className="hidden sm:flex">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Notes</NavLink>
        <NavLink href="/user">Users</NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
