import React, { useState, Fragment, useContext } from 'react';
import InitContext from '../../context/initContext';

const Form = () => {
  // State
  const [combatant, setCombatant] = useState({
    id: '',
    name: '',
    count: '',
    type: 'PC'
  });
  const { name, count, type } = combatant;

  // Context
  const initContext = useContext(InitContext);

  const { addInit } = initContext;

  // onChange Handler
  const onChange = e => {
    setCombatant({ ...combatant, [e.target.name]: e.target.value });
  };
  // onSubmit Handler
  const onSubmit = e => {
    e.preventDefault();

    addInit(combatant);

    setCombatant({
      name: '',
      count: '',
      type: 'PC'
    });
  };

  return (
    <Fragment>
      <h4 className="center">Character Form</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s8">
            <input
              type="text"
              placeholder="Character Name"
              required
              name="name"
              onChange={onChange}
              value={name}
            />
            <label htmlFor="name">Character Name</label>
          </div>
          <div className="input-field col s4">
            <input
              type="number"
              placeholder="Initiative"
              required
              name="count"
              onChange={onChange}
              value={count}
              min="0"
              max="45"
            />
            <label htmlFor="count">Initiative</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="type"
              value={type}
              className="browser-default"
              onChange={onChange}
            >
              <option value="" disabled>
                Select Type of Character
              </option>
              <option value="PC">PC</option>
              <option value="NPC">NPC</option>
            </select>
          </div>
        </div>
        <button className="btn waves-effect waves-light blue" type="submit">
          Submit
          <i className="material-icons right">person_add</i>
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
