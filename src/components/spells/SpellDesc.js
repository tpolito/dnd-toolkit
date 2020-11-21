import React, { useState, useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';

const SpellDesc = ({ match, history }) => {
  const slug = match.params.slug;
    // On Page Load
    useEffect(() => {
        getSpell(slug);
        document.title = 'Spell Description';
    //eslint-disable-next-line
    }, []);

    // State
    const [spell, setSpell] = useState({});
    const [loading, setLoading] = useState(false);

    const myHeaders = {
        "Content-Type": "application/json"
    };

    const getSpell = async (slug) => {
        setLoading(true);
        const res = await fetch(`https://api.open5e.com/spells/${slug}`, {
            method: "GET",
            headers: myHeaders
          });
        const data = await res.json();
        setSpell(data);

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
    subclasses,
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
      <a href='/spells' className='waves-effect waves-light'>
        <i className='material-icons left'>arrow_back</i>
      </a>
      <div className='card'>
        <div className='col s12'>
          <h4 className='center h4-pt'>{name}</h4>
          <div className='divider' />
        </div>
        <div className='row'>
          <div className='col s6 m3'>
            <p>
              <strong>Level: </strong>
              {level}
            </p>
            <p>
              <strong>Duration: </strong>
              {duration}
            </p>
          </div>
          <div className='col s6 m3'>
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
          <div className='col s6 m3'>
            <p>
              <strong>Range: </strong>
              {range}
            </p>
            <p>
              <strong>Concentration: </strong>
              {concentration ? 'Yes' : 'No'}
            </p>
          </div>
          <div className='col s6 m3'>
            <p>
              <strong>Ritual: </strong>
              {ritual ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Components: </strong>
              {components}
            </p>
          </div>

          <div className='col s12'>
            <div className='divider' />
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

            <p><strong>
              {subclasses && subclasses.map((dndClass) => {
                return <span className="mb-small badge blue white-text">{dndClass.name}</span>
              })}
              {classes && classes.map((dndClass) => {
              return <span className="mb-small badge blue white-text">{dndClass.name}</span>
            })}
            </strong></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpellDesc;
