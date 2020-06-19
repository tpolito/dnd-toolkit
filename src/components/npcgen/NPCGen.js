import React, { useState } from 'react';
import names from './npcData/names.json';
// import quirks from './npcData/quirks.json';

const NPCGen = () => {
  // State
  const [NPC, setNPC] = useState({
    gender: '',
    race: '',
  });
  const [name, setName] = useState('');

  // onChange Handle
  const onChange = (e) => {
    setNPC({ ...NPC, [e.target.name]: e.target.value });
  };

  // Deconstruct NPC Object
  const { gender, race } = NPC;

  // One or Zero
  const getOneOrZero = () => {
    let num = Math.round(Math.random());
    if (num === 1) {
      return true;
    } else {
      return false;
    }
  };

  // Get a random name from the names
  const getRandomName = () => {
    let firstNum, secondNum;

    if (race === '' || gender === '') {
      alert('Please select and option from all fields');
    } else {
      firstNum = Math.floor(Math.random() * names[race][gender].length);
      secondNum = Math.floor(Math.random() * names[race].lastName.length);
      setName(
        `${names[race][gender][firstNum]} ${names[race].lastName[secondNum]}`
      );
    }
  };

  return (
    <div>
      <h4 className='center'>NPC Name Generator</h4>
      <div className='center'>
        <div className='input-field'>
          <select
            name='gender'
            value={gender}
            className='browser-default'
            onChange={onChange}
            required
          >
            <option value='' disabled>
              Select Gender of NPC
            </option>
            <option value='m'>Male</option>
            <option value='f'>Female</option>
          </select>
        </div>
        <div className='input-field'>
          <select
            name='race'
            value={race}
            className='browser-default'
            onChange={onChange}
            required
          >
            <option value='' disabled>
              Select Race of NPC
            </option>

            <option value='dragonborn'>Dragonborn</option>
            <option value='dwarf'>Dwarf</option>
            <option value='elf'>Elf</option>
            <option value='gnome'>Gnome</option>
            <option value={getOneOrZero() === 1 ? 'human' : 'elf'}>
              Half-Elf
            </option>
            <option value='halfling'>Halfling</option>
            <option value='half-orc'>Half-Orc</option>
            <option value='human'>Human</option>
            <option value='teifling'>Teifling</option>
          </select>
        </div>
        <button
          onClick={getRandomName}
          className='waves-effect waves-light btn-large'
        >
          Generate An NPC
        </button>
        <div>
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default NPCGen;
