import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import SpellItem from './SpellItem';

import data from '../data/Spells.json';

import uuid from 'uuid';

const Spells = () => {
  // On Page Load
  useEffect(() => {
    getLocalSpells();
    document.title = 'Spell List';
    //eslint-disable-next-line
  }, []);

  // State
  const [spells, setSpells] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');

  // Deconstructing
  let { results } = spells;

  // Get spells from local JSOn
  const getLocalSpells = async () => {
    setLoading(true);

    setSpells(data);

    setLoading(false);

    console.log(data);
  };

  // Filter Input
  const handleChange = e => {
    setSearchString(e.target.value);
  };

  if (searchString.length > 0) {
    results = results.filter(i => {
      return i.name.toLowerCase().match(searchString);
    });
  }

  // Render checking
  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Spell List</h4>
        <input
          type="text"
          placeholder="Search for a spell"
          onChange={handleChange}
        />
      </li>
      {results &&
        results.map(spell => <SpellItem spell={spell} key={uuid()} />)}
    </ul>
  );
};

export default Spells;
