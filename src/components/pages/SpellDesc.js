import React, { useState, useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';

import data from '../data/Spells.json';

const SpellDesc = ({ match, history }) => {
  // On Page Load
  useEffect(() => {
    // getSpell(`http://www.dnd5eapi.co/api/spells/${match.params.id}`);
    getLocalSpell(match.params.id);
    // eslint-disable-next-line
  }, []);

  // State
  const [spell, setSpell] = useState({});
  const [loading, setLoading] = useState(false);

  //Get Spell Function
  // Headers
  const myHeaders = {
    'Content-Type': 'application/json'
  };

  // const getSpell = async request => {
  //   setLoading(true);
  //   const res = await fetch(request, {
  //     method: 'GET',
  //     headers: myHeaders
  //   });
  //   const data = await res.json();
  //   setSpell(data);
  //   setLoading(false);
  // };

  const getLocalSpell = async id => {
    setLoading(true);

    setSpell(data.results[id - 1]);

    setLoading(false);
  };

  // Destructuring
  const {
    name,
    desc,
    higher_level,
    school,
    level,
    casting_time,
    duration,
    range,
    concentration,
    components,
    ritual,
    material,
    classes,
    subclasses
  } = spell;

  // Color Spell School
  let color;
  // Runs the switch once the school and school.name have loaded
  if (school && school.name) {
    switch (school.name) {
      case 'Abjuration':
        color = '#008acf';
        break;
      case 'Conjuration':
        color = '#cfcf00';
        break;
      case 'Divination':
        color = '#00bedb';
        break;
      case 'Enchantment':
        color = '#c983b4';
        break;
      case 'Evocation':
        color = '#822424';
        break;
      case 'Illusion':
        color = '#6a3a87';
        break;
      case 'Necromancy':
        color = '#4b962d';
        break;
      case 'Transmutation':
        color = '#dba400';
        break;
      default:
        color = 'black';
    }
  }

  // Render checking
  if (loading) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <a href="/spells" className="waves-effect waves-light">
        <i className="material-icons left">arrow_back</i>
      </a>
      <div className="card">
        <div className="col s12">
          <h4 className="center h4-pt">{name}</h4>
          <div className="divider" />
        </div>
        <div className="row">
          <div className="col s3">
            <p>
              <strong>Level: </strong>
              {level}
            </p>
            <p>
              <strong>Duration: </strong>
              {duration}
            </p>
          </div>
          <div className="col s3">
            <p>
              <strong>Casting Time: </strong>
              {casting_time}
            </p>
            <p>
              <strong>School: </strong>
              <span style={{ color: color }}>
                {school ? school.name : 'Loading...'}
              </span>
            </p>
          </div>
          <div className="col s3">
            <p>
              <strong>Range: </strong>
              {range}
            </p>
            <p>
              <strong>Concentration: </strong>
              {concentration}
            </p>
          </div>
          <div className="col s3">
            <p>
              <strong>Ritual: </strong>
              {ritual}
            </p>
            <p>
              <strong>Components: </strong>
              {components && components.map(component => component)}
            </p>
          </div>

          <div className="col s12">
            <div className="divider" />
            <p>{desc ? desc[0] : null}</p>
            {higher_level ? (
              <p>
                <strong>At Higher Levels: </strong>
                {higher_level[0]}
              </p>
            ) : null}
            {material ? (
              <p>
                <strong>Materials: </strong>
                {material}
              </p>
            ) : null}
            <p>
              <strong>Learned By: </strong>
              {classes && classes.map(dnd_class => `${dnd_class.name}, `)}
              {subclasses && subclasses.map(sub_class => `${sub_class.name}, `)}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpellDesc;
