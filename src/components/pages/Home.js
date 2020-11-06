import React, { useEffect } from 'react';
import HomePageCard from '../layout/HomePageCard'

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
          <HomePageCard title={'Initiative Tracker'} desc={'Use this quick initiative tool to create and track simple encounters you come up with on the fly!'} link={'/init'} />
          <HomePageCard title={'Condition List'} desc={'The conditions page is an easy and quick way to look up the various conditions you can be afflicted with in DND 5e.'} link={'/conditions'} />
          <HomePageCard title={'Weapons List'} desc={'The weapons list is is a quick way to check damage and properties of normal weapons.'} link={'/weapons'} />
        </div>
        <div className='col s12 m6'>
        <HomePageCard title={'Spell List'} desc={'check out and view information on all the powerful spells in D&D!'} link={'/spells'} />
        <HomePageCard title={'NPC Generator'} desc={'Generate simple NPC names.'} link={'/npc-gen'} />
        </div>
      </div>
    </div>
  );
};

export default Home;
