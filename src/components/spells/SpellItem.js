import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SpellItem = ({ spell }) => {
  const { name, url } = spell;
  // Parse the spell number that comes attached to the URL
  const spellNum = url.substr(34);

  return (
      <li className="collection-item">
        <a href={`/spells/desc/${spellNum}`}>{name}</a>
      </li>
  );
};

SpellItem.propTypes = {
  spell: PropTypes.object.isRequired
};

export default SpellItem;
