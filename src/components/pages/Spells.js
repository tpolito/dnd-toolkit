import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import SpellItem from './SpellItem';

import uuid from 'uuid';

const Spells = ({ match }) => {
  // On Page Load
  useEffect(() => {
    getSpells(`http://www.dnd5eapi.co/api/spells`);
    //eslint-disable-next-line
  }, []);

  // State
  const [spells, setSpells] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState('');

  // Deconstructing
  let { results } = spells;

  // Fetch Headers
  const myHeaders = {
    'Content-Type': 'application/json'
  };

  // Fetch Spells
  const getSpells = async request => {
    setLoading(true);
    const res = await fetch(request, {
      method: 'GET',
      headers: myHeaders
    });
    const data = await res.json();
    setSpells(data);
    setLoading(false);
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
