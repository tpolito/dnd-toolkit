import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="/spells/1">Spell List</a>
        </li>
        <li>
          <a href="/ref">References</a>
        </li>
        <li>
          <a href="/conditions">Conditions</a>
        </li>
        <li className="divider" />
      </ul>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a href="/init">Initiative</a>
        </li>
        <li>
          <a href="/npc-gen">NPC Generator</a>
        </li>
        <li className="divider" />
      </ul>
      <nav className="blue darken-1" style={{ marginBottom: '30px' }}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            D&D Toolkit
          </a>
          <ul id="nav-mobile" className="right hide-on-medium-and-down">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown2">
                Initiative
                <i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Reference<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
