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
  };

  // Set random number interval
  let random = 0;
  // Get a random number
  const getRandomNum = num => {
    random = Math.floor(Math.random() * num);
  };
  // Deconstruct NPC Object
  const { gender, race } = NPC;

  // Get a random name from the data
  const getRandomName = () => {
    let previousName = '';
    if (race === '' || gender === '') {
      alert('Please select and option from all fields');
    } else {
      getRandomNum(data[race][gender].length - 1);
      setName(`${data[race][gender][random]} ${data[race].lastName[random]}`);
    }
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
          </select>
        </div>
        <button
          onClick={getRandomName}
          className="waves-effect waves-light btn-large"
        >
          Generate An NPC
        </button>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default NPCGen;
