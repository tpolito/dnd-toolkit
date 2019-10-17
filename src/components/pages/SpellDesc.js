import React, { useState, useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';

const SpellDesc = ({ match, history }) => {
  // On Page Load
  useEffect(() => {
    getSpell(`http://www.dnd5eapi.co/api/spells/${match.params.id}`);
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

  const getSpell = async request => {
    setLoading(true);
    const res = await fetch(request, {
      method: 'GET',
      headers: myHeaders
    });
    const data = await res.json();
    setSpell(data);
    setLoading(false);
    console.log(data);
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
              {school ? school.name : 'Loading...'}
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
