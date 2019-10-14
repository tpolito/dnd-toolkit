import React, { useState } from 'react';
import data from './npcData/data.json';

const NPCGen = () => {
  // State
  const [NPC, setNPC] = useState({
    gender: '',
    race: ''
  });
  const [name, setName] = useState('');

  // onChange Handle
  const onChange = e => {
    setNPC({ ...NPC, [e.target.name]: e.target.value });
    console.log(NPC);
  };

  // Deconstruct NPC Object
  const { gender, race } = NPC;

  // Get a random name from the data
  const getRandomName = () => {
    let firstNum = Math.floor(Math.random() * data[race][gender].length);
    let secondNum = Math.floor(Math.random() * data[race].lastName.length);

    if (race === '' || gender === '') {
      alert('Please select and option from all fields');
    } else {
      setName(
        `${data[race][gender][firstNum]} ${data[race].lastName[secondNum]}`
      );
    }

    console.log(`${firstNum} + ${secondNum}`);
  };

  const debug = () => {
    console.log(NPC);
  };

  return (
    <div>
      <h4 className="center">NPC Name Generator</h4>
      <div className="center">
        <div className="input-field">
          <select
            name="gender"
            value={gender}
            className="browser-default"
            onChange={onChange}
            required
          >
            <option value="" disabled>
              Select Gender of NPC
            </option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <div className="input-field">
          <select
            name="race"
            value={race}
            className="browser-default"
            onChange={onChange}
            required
          >
            <option value="" disabled>
              Select Race of NPC
            </option>
            <option value="elf">Elf</option>
            <option value="dwarf">Dwarf</option>
            <option value="gnome">Gnome</option>
            <option value="halfling">Halfling</option>
          </select>
        </div>
        <button
          onClick={getRandomName}
          className="waves-effect waves-light btn-large"
        >
          Generate An NPC
        </button>
        <button onClick={debug} className="waves-effect waves-light btn-large">
          Debug
        </button>
        <div>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default NPCGen;
