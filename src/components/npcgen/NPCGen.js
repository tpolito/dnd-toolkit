import React, { useState } from 'react';
import data from './npcData/data.json';

const NPCGen = () => {
  // State
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  // Deconstruct
  const { elf } = data;

  // onChange Handle
  const onChange = e => {
    setGender({ ...gender, [e.target.name]: e.target.value });
  };

  // Set random number interval
  let random = 0;
  // Get a random number
  const getRandomNum = num => {
    random = Math.floor(Math.random() * num);
  };

  // Get a random name from the data
  const getRandomName = () => {
    getRandomNum(4);
    name = `${elf.fFirstName[random]} ${elf.elfLastName[random]}`;

    console.log(name);
  };
  return (
    <div>
      <h4 className="center">NPC Name Generator</h4>
      <div className="center">
        <div className="input-field">
          <select
            name="type"
            value={gender}
            className="browser-default"
            onChange={onChange}
          >
            <option value="" disabled>
              Select Gender of Character
            </option>
            <option value="m">Male</option>
            <option value="f">Female</option>
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
