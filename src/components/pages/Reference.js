import React, { useEffect } from 'react';
import Suffocating from '../reference/Suffocating';
import Cover from '../reference/Cover';
import SettingDC from '../reference/SettingDC';

const Reference = () => {
  // Page Title
  useEffect(() => {
    document.title = 'Reference';
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      <div className='col s12'>
        <h4 className='center'>References</h4>
        <div className='col s12 m6'>
          <Suffocating />
          <SettingDC />
        </div>
        <div className='col s12 m6'>
          <Cover />
        </div>
      </div>
    </div>
  );
};

export default Reference;
