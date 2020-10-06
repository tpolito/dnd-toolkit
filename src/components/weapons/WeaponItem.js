import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const WeaponItem = ({ weapon }) => {
  const { name, slug } = weapon;
  // Parse the spell number that comes attached to the URL
//   const spellNum = url.substr(34);

  return (
    <Fragment>
      <li className="collection-item">
        <a href={`/weapons/desc/${slug}`}>{name}</a>
      </li>
    </Fragment>
  );
};

WeaponItem.propTypes = {
  weapon: PropTypes.object.isRequired
};

export default WeaponItem;
