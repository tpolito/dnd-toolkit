import React from 'react';
import data from './npcData/data.json';

const NPCGen = () => {
  // Get a random number
  let random = Math.floor(Math.random() * 4);
  // Log a Elf First and Last Name
  console.log(
    `${data.elf.mFirstName[random]} ${data.elf.elfLastName[random]} `
  );
  return (
    <div>
      <h1>NPC Name Generator</h1>
      <button className="waves-effect waves-light btn-large">
        Generate An NPC
      </button>
    </div>
  );
};

export default NPCGen;
