import React, { useContext, useState } from 'react';
import InitContext from '../../context/init/initContext';
import PropTypes from 'prop-types';

const CharacterItem = ({ combatant }) => {
  // State
  const [concentration, setConcentration] = useState(false);
  // Context
  const { name, count, type, id } = combatant;

  const initContext = useContext(InitContext);
  const { deleteCombatant } = initContext;

  // Event Handlers
  const removeCharacter = () => {
    deleteCombatant(id);
  };

  const concentrationHandler = () => {
    setConcentration(!concentration);
  };

  return (
    <li
      className={`collection-item ${
        concentration === true ? 'green lighten-4' : ''
      }`}
    >
      <div>
        <span className={`${type === 'PC' ? 'blue-text darken' : 'red-text'}`}>
          {name}
          <span> - {count}</span>
        </span>
        <a href="#!" onClick={removeCharacter} className="secondary-content">
          <i className="material-icons red-text">delete</i>
        </a>
        <a
          href="#!"
          onClick={concentrationHandler}
          className="secondary-content"
        >
          <i className="material-icons black-text">priority_high</i>
        </a>
      </div>
    </li>
  );
};

CharacterItem.propTypes = {
  combatant: PropTypes.object.isRequired
};

export default CharacterItem;
