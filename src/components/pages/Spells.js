import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import uuid from 'uuid';
import ListContainer from '../layout/Lists/ListContainer'
import ListItem from '../layout/Lists/ListItem'

const Spells = () => {
  // On Page Load
  useEffect(() => {
    getSpells();
    document.title = 'Spell List';
    //eslint-disable-next-line
  }, []);

  // State
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(false);

  const myHeaders = {
    "Content-Type": "application/json"
  };

  async function getSpells() {
    setLoading(true);
    const res = await fetch("https://api.open5e.com/spells/?limit=321", {
        method: "GET",
        headers: myHeaders
      });
    const data = await res.json();
    setSpells(data.results);
    setLoading(false);
  }

  // Render checking
  if (loading) {
    return <Preloader />;
  }

  return (
   <ListContainer>
      {spells && spells.map((spell) => <ListItem text={spell.name} url="" key={uuid()} />)}
   </ListContainer>
  );
};

export default Spells;
