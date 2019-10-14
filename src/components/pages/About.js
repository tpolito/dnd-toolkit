import React from 'react';

const About = () => {
  return (
    <div className="row">
      <h4 className="center">About</h4>
      <div className="col s12 center">
        <p>
          This site serves as a personal tool for my Dungeons and Dragons games.
          It contains a few tools I found my self needing, as well as rules I
          needed to reference frequently.
        </p>
        <div className="divider" />
        <p>
          The Spell list and Condition page are brought to you by{' '}
          <a href="https://open5e.com/">Open5e's API</a>, which has been a great
          help in developing this site.
        </p>
        <div className="divider" />
        <p>
          If you wish to contact me for any reason, please do so by emailing{' '}
          <a href="mailto:tyler@tylerpolito.info">here</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
