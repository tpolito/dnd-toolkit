import React, { useState, useEffect, Fragment } from 'react';
import ConditionItem from '../conditions/ConditionItem';
import uuid from 'uuid';
import Preloader from '../layout/Preloader';

const Conditions = () => {
  // On Page Load
  useEffect(() => {
    getConditions();
    // eslint-disable-next-line
  }, []);
  // State
  const [conditions, setConditions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Conditions from API
  // Headers
  const myHeaders = {
    'Content-Type': 'application/json'
  };

  // Fetch Request
  const getConditions = async () => {
    setLoading(true);
    const res = await fetch('https://api-beta.open5e.com/conditions/', {
      method: 'GET',
      headers: myHeaders
    });
    const data = await res.json();
    setConditions(data.results);
    setLoading(false);
  };

  // Deconstructing

  // Render checking
  if (loading) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Conditions</h4>
        </li>
        {conditions &&
          conditions.map(condition => (
            <ConditionItem condition={condition} key={uuid()} />
          ))}
      </ul>
    </Fragment>
  );
};

export default Conditions;
