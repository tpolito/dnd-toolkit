import React from 'react';
import NavItem from './NavItem'
import NavItemDropdown from './NavItemDropdown'

const Navbar = () => {
  const toolsDropdown = [
    {
      text: 'Initiative Tracker',
      link: '/init',
      key: 1
    },
    {
      text: 'NPC Generator',
      link: '/npc-gen',
      key: 2
    }
  ]

  const refDropdown = [
    {
      text: 'Spells',
      link: '/spells',
      key: 1
    },
    {
      text: 'Weapons List',
      link: '/weapons',
      key: 2
    }
  ]

  return (
    <nav className="flex justify-between items-center bg-orange-200 shadow-md">
      {/* TODO: Make this an svg/image instead of text */}
      <a href="/" className="font-semibold p-5 text-black font-main">DnD Toolkit</a>
      <ul className="flex m-0 p-0 list-none h-full">
        <NavItemDropdown link="/" text="Tools" dropdown={toolsDropdown} />
        <NavItemDropdown link="/" text="References" dropdown={refDropdown} />
        <NavItem link="/about" text="About" />
        <NavItem link="/test" text="Test" />
      </ul>
    </nav>
  );
};

export default Navbar;
