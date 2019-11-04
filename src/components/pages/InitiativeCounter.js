import React, { useEffect } from 'react';
import Form from '../initiative/Form';
import InitiativeDisplay from '../initiative/InitiativeDisplay';

const InitiativeCounter = () => {
  useEffect(() => {
    document.title = 'Initiative Counter';
    // eslint-disable-next-line
  }, []);
  return (
    <div className="row">
      <div className="col s6">
        <Form />
      </div>
      <div className="col s6">
        <InitiativeDisplay />
      </div>
    </div>
  );
};

export default InitiativeCounter;
