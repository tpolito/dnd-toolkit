import React, { useContext, useState } from 'react';
import InitContext from '../../context/init/initContext';
import PropTypes from 'prop-types';

const CharacterItem = ({ combatant }) => {
  // State
  const [concentration, setConcentration] = useState(false);
  // Context
  const { name, count, type, id } = combatant;

  const initContext = useContext(InitContext);
  const { deleteCombatant, setCurrent } = initContext;

  // Event Handlers
  // Remove Character
  const removeCharacter = () => {
    deleteCombatant(id);
  };

  // Edit Character
  const editCharacter = () => {
    setCurrent(combatant);
  };

  const concentrationHandler = () => {
    setConcentration(!concentration);
  };

  return (
    <li
      className={`collection-item ${
        concentration === true ? 'red lighten-4' : ''
      }`}
    >
      <div>
        <span
          className={`${
            type === 'PC' ? 'blue-text darken' : 'red-text darken'
          }`}
        >
          {name}
          <span> - {count}</span>
        </span>
        <a
          href="#!"
          onClick={removeCharacter}
          className="secondary-content tooltipped"
          data-position="top"
          data-tooltip="Remove Combatant"
        >
          <i className="material-icons red-text">delete</i>
        </a>
        <a
          href="#!"
          onClick={editCharacter}
          className="secondary-content tooltipped"
          data-position="top"
          data-tooltip="Edit Character"
        >
          <i className="material-icons black-text">edit</i>
        </a>
        <a
          href="#!"
          onClick={concentrationHandler}
          className="secondary-content tooltipped"
          data-position="top"
          data-tooltip="Concentration"
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
