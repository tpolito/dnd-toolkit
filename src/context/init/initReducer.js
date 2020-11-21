import {
  ADD_INIT,
  GET_INIT,
  CLEAR_INIT,
  DELETE_INIT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_INIT
} from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_INIT:
      return {
        ...state,
        combatants: action.payload
      };
    case ADD_INIT:
      return {
        ...state,
        combatants: [...state.combatants, action.payload]
      };
    case DELETE_INIT:
      return {
        ...state,
        combatants: state.combatants.filter(
          combatant => combatant.id !== action.payload
        )
      };
    case CLEAR_INIT:
      return {
        ...state,
        combatants: []
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_INIT:
      return {
        ...state,
        combatants: state.combatants.map(combatant =>
          combatant.id === action.payload.id ? action.payload : combatant
        ),
        loading: false
      };

    default:
      return state;
  }
};
