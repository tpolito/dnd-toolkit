import React, { useState, useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';

const SpellDesc = ({ match, history }) => {
  // On Page Load
  useEffect(() => {
    getSpell(`https://api-beta.open5e.com/spells/${match.params.slug}`);
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
    dnd_class
  } = spell;

  const previousPage = () => {
    history.goBack();
  };

  // Render checking
  if (loading) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <span onClick={previousPage} className="waves-effect waves-light">
        <i className="material-icons left">arrow_back</i>
      </span>
      <div className="card">
        <div className="col s12">
          <h4 className="center h4-pt">{name}</h4>
          <div className="divider" />
        </div>
        <div className="row">
          <div className="col s4">
            <p>
              <strong>Level: </strong>
              {level}
            </p>
            <p>
              <strong>Duration: </strong>
              {duration}
            </p>
          </div>
          <div className="col s4">
            <p>
              <strong>Casting Time: </strong>
              {casting_time}
            </p>
            <p>
              <strong>School: </strong>
              {school}
            </p>
          </div>
          <div className="col s4">
            <p>
              <strong>Range: </strong>
              {range}
            </p>
            <p>
              <strong>Concentration: </strong>
              {concentration}
            </p>
          </div>

          <div className="col s12">
            <div className="divider" />
            <p>{desc}</p>
            {higher_level === '' ? null : (
              <p>
                <strong>At Higher Levels: </strong>
                {higher_level}
              </p>
            )}
            <p>
              <strong>Learned By: </strong>
              {dnd_class}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SpellDesc;
