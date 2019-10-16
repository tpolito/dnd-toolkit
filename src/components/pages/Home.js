import React from 'react';

const Home = () => {
  return (
    <div className="row">
      <div className="col s12">
        <h4 className="center">Home Page</h4>
        <div className="col s6">
          <div className="card">
            <div class="card blue darken-1">
              <div class="card-content white-text">
                <span class="card-title">Initiative Tracker</span>
                <hr />
                <p>
                  Use this quick initiative tool to create and track simple
                  encounters you come up with on the fly!
                </p>
              </div>
              <div className="card-action">
                <a href="/init" class="white-text">
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="card">
            <div class="card blue darken-1">
              <div class="card-content white-text">
                <span class="card-title">Spell List</span>
                <hr />
                <p>
                  Take a quick look at the list of spells in your arsenal.
                  Courtesy of{' '}
                  <a href="https://open5e.com/" className="black-text">
                    Open5e's API
                  </a>
                  , check out and view information on all the powerful spells in
                  D&D!
                </p>
              </div>
              <div className="card-action">
                <a href="/spells" class="white-text">
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div class="card blue darken-1">
              <div class="card-content white-text">
                <span class="card-title">NPC Generator</span>
                <hr />
                <p>Generate simple NPC names based on Race & Sex!</p>
              </div>
              <div className="card-action">
                <a href="/npc-gen" class="white-text">
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
