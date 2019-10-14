import React, { useContext } from 'react';
import InitContext from '../../context/init/initContext';
import CharacterItem from './CharacterItem';

const InitiativeDisplay = () => {
  const initContext = useContext(InitContext);

  const { combatants, clearInit } = initContext;

  combatants.sort((a, b) => {
    return b.count - a.count;
  });

  const clearAll = () => {
    clearInit();
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">
          Initiative
          <span
            style={{ cursor: 'pointer' }}
            onClick={clearAll}
            className="secondary-content tooltipped"
            data-position="top"
            data-tooltip="Clear All Combatants"
          >
            <i className="material-icons red-text">delete_forever</i>
          </span>
        </h4>{' '}
      </li>
      {combatants.length === 0 ? (
        <p className="center">No Combatants to Show</p>
      ) : (
        combatants.map(combatant => (
          <CharacterItem combatant={combatant} key={combatant.id} />
        ))
      )}
    </ul>
  );
};

export default InitiativeDisplay;
