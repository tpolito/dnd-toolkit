import React, { useEffect } from 'react';

const Home = () => {
  // Page Title
  useEffect(() => {
    document.title = 'Home | D&D Toolkit';
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      <div className='col s12'>
        <h4 className='center'>Home</h4>
        <div className='col s12 m6'>
          <div className='card'>
            <div class='card blue darken-1'>
              <div class='card-content white-text'>
                <span class='card-title'>Initiative Tracker</span>
                <hr />
                <p>
                  Use this quick initiative tool to create and track simple
                  encounters you come up with on the fly!
                </p>
              </div>
              <div className='card-action'>
                <a href='/init' class='white-text'>
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
          <div className='card'>
            <div class='card blue darken-1'>
              <div class='card-content white-text'>
                <span class='card-title'>Condition List</span>
                <hr />
                <p>
                  Powered by{' '}
                  <a href='http://www.dnd5eapi.co/' className='black-text'>
                    Open5e's API
                  </a>
                  , the conditions page is an easy and quick way to look up the
                  various conditions you can be afflicted with in DND 5e.
                </p>
              </div>
              <div className='card-action'>
                <a href='/conditions' class='white-text'>
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col s12 m6'>
          <div className='card'>
            <div class='card blue darken-1'>
              <div class='card-content white-text'>
                <span class='card-title'>Spell List</span>
                <hr />
                <p>
                  Take a quick look at the list of spells in your arsenal.
                  Courtesy of{' '}
                  <a href='http://www.dnd5eapi.co/' className='black-text'>
                    D&D 5e API
                  </a>
                  , check out and view information on all the powerful spells in
                  D&D!
                </p>
              </div>
              <div className='card-action'>
                <a href='/spells' class='white-text'>
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
          <div className='card'>
            <div class='card blue darken-1'>
              <div class='card-content white-text'>
                <span class='card-title'>NPC Generator</span>
                <hr />
                <p>Generate simple NPC names.</p>
              </div>
              <div className='card-action'>
                <a href='/npc-gen' class='white-text'>
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
