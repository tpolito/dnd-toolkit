import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SpellItem = ({ spell }) => {
  const { name, slug } = spell;

  return (
    <Fragment>
      <li className="collection-item">
        <a href={`/spells/desc/${slug}`}>{name}</a>
      </li>
    </Fragment>
  );
};

SpellItem.propTypes = {
  spell: PropTypes.object.isRequired
};

export default SpellItem;
