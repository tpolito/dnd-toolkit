import React from 'react';

const About = () => {
  return (
    <div className="row">
      <h4 className="center">About</h4>
      <div className="col s12 center">
        <p>
          This site serves as a personal tool for my Dungeons and Dragons games.
          It houses tools I found my self in need of, as well as rules I needed
          help remembering.
        </p>
        <div className="divider" />
        <p>
          The Spell list and Condition page are brought to you by{' '}
          <a href="https://open5e.com/">Open5e's API</a>, which has been a great
          help in developing this site.
        </p>
      </div>
    </div>
  );
};

export default About;
