import React, { useReducer } from 'react';
import InitContext from './initContext';
import initReduceer from './initReducer';
import uuid from 'uuid';
import {
  ADD_INIT,
  GET_INIT,
  CLEAR_INIT,
  DELETE_INIT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_INIT
} from './types';

const InitState = props => {
  const initialState = {
    combatants: [
      {
        id: 1,
        name: 'Darkness',
        count: '16',
        type: 'PC'
      },
      {
        id: 2,
        name: 'Big Evil Bad Guy',
        count: '12',
        type: 'NPC'
      },
      {
        id: 3,
        name: 'Henchman',
        count: '9',
        type: 'NPC'
      },
      {
        id: 4,
        name: 'Zakron',
        count: '1',
        type: 'PC'
      }
    ],
    current: null
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

  // Set Current
  const setCurrent = character => {
    dispatch({ type: SET_CURRENT, payload: character });
  };

  // Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Combatant
  const updateInit = character => {
    dispatch({ type: UPDATE_INIT, payload: character });
  };

  return (
    <InitContext.Provider
      value={{
        combatants: state.combatants,
        current: state.current,
        getInit,
        addInit,
        deleteCombatant,
        clearInit,
        setCurrent,
        clearCurrent,
        updateInit
      }}
    >
      {props.children}
    </InitContext.Provider>
  );
};

export default InitState;
