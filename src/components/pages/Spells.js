import React, { useState, useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';
import SpellItem from './SpellItem';

import uuid from 'uuid';

const Spells = ({ match }) => {
  // On Page Load
  useEffect(() => {
    getSpells(`https://api-beta.open5e.com/spells/?page=${match.params.page}`);
    //eslint-disable-next-line
  }, []);

  // State
  const [spells, setSpells] = useState({});
  const [loading, setLoading] = useState(false);

  // Deconstructing
  const { results } = spells;

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

  // Page Num
  const pageNum = parseInt(match.params.page);

  // Render checking
  if (loading) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Spell List</h4>
        </li>
        {results &&
          results.map(spell => <SpellItem spell={spell} key={uuid()} />)}
      </ul>
      <ul className="pagination">
        <li className={pageNum === 1 ? 'disabled' : 'waves-effect'}>
          <a href={`/spells/${pageNum - 1}`}>
            <i className="material-icons">chevron_left</i>
          </a>
        </li>

        <li className={pageNum === 1 ? 'active' : 'waves-effect'}>
          <a href="/spells/1">1</a>
        </li>
        <li className={pageNum === 2 ? 'active' : 'waves-effect'}>
          <a href="/spells/2">2</a>
        </li>
        <li className={pageNum === 3 ? 'active' : 'waves-effect'}>
          <a href="/spells/3">3</a>
        </li>
        <li className={pageNum === 4 ? 'active' : 'waves-effect'}>
          <a href="/spells/4">4</a>
        </li>
        <li className={pageNum === 5 ? 'active' : 'waves-effect'}>
          <a href="/spells/5">5</a>
        </li>
        <li className={pageNum === 6 ? 'active' : 'waves-effect'}>
          <a href="/spells/6">6</a>
        </li>
        <li className={pageNum === 7 ? 'active' : 'waves-effect'}>
          <a href="/spells/7">7</a>
        </li>
        <li className={pageNum === 7 ? 'disabled' : 'waves-effect'}>
          <a href={`/spells/${pageNum + 1}`}>
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Spells;
