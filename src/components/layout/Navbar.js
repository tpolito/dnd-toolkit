import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <ul id='dropdown1' className='dropdown-content'>
        <li>
          <a href='/spells'>Spell List</a>
        </li>
        <li>
          <a href='/ref'>References</a>
        </li>
        <li>
          <a href='/conditions'>Conditions</a>
        </li>
        <li className='divider' />
      </ul>
      <ul id='dropdown2' className='dropdown-content'>
        <li>
          <a href='/init'>Initiative Tracker</a>
        </li>
        <li>
          <a href='/npc-gen'>NPC Generator</a>
        </li>
        <li className='divider' />
      </ul>
      <nav className='blue darken-1' style={{ marginBottom: '30px' }}>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo center'>
            <span role='img' aria-label='dragon-emoji'>
              🐲
            </span>{' '}
            D&D Toolkit
          </a>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-small-and-down'>
            <li>
              <a className='dropdown-trigger' href='#!' data-target='dropdown2'>
                Tools
                <i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className='dropdown-trigger' href='#!' data-target='dropdown1'>
                Reference<i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
          <ul className='sidenav' id='mobile-demo'>
            <li>
              <a className='dropdown-trigger' href='#!' data-target='dropdown2'>
                Tools
                <i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a className='dropdown-trigger' href='#!' data-target='dropdown1'>
                Reference<i className='material-icons right'>arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
