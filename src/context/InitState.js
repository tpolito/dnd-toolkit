import React, { useReducer } from 'react';
import InitContext from './initContext';
import initReduceer from './initReducer';
import uuid from 'uuid';
import { ADD_INIT, GET_INIT, CLEAR_INIT, DELETE_INIT } from './types';

const InitState = props => {
  const initialState = {
    combatants: [
      // {
      //   id: 1,
      //   name: 'Darkness',
      //   count: '16',
      //   type: 'PC'
      // },
      // {
      //   id: 2,
      //   name: 'Big Evil Bad Guy',
      //   count: '12',
      //   type: 'NPC'
      // }
    ]
  };
  const [state, dispatch] = useReducer(initReduceer, initialState);
  // Get combatants
  const getInit = () => {
    dispatch({ type: GET_INIT, payload: initialState.combatants });
  };

  // Add new combatants
  const addInit = character => {
    character.id = uuid.v4();
    dispatch({ type: ADD_INIT, payload: character });
  };
  // Clear all combatants
  const clearInit = () => {
    dispatch({ type: CLEAR_INIT });
  };

  // Remove a single combatant
  const deleteCombatant = id => {
    dispatch({ type: DELETE_INIT, payload: id });
  };

  return (
    <InitContext.Provider
      value={{
        combatants: state.combatants,
        getInit,
        addInit,
        deleteCombatant,
        clearInit
      }}
    >
      {props.children}
    </InitContext.Provider>
  );
};

export default InitState;
