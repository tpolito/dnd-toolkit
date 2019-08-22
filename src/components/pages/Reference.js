import React from 'react';
import Suffocating from '../reference/Suffocating';
import Cover from '../reference/Cover';
import SettingDC from '../reference/SettingDC';

const Reference = () => {
  return (
    <div className="row">
      <div className="col s12">
        <h4 className="center">References</h4>
        <div className="col s6">
          <Suffocating />
          <SettingDC />
        </div>
        <div className="col s6">
          <Cover />
        </div>
      </div>
    </div>
  );
};

export default Reference;
