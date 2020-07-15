import React from 'react';

const Cover = () => {
  return (
    <div className='card'>
      <div className='card blue darken-1'>
        <div className='card-content white-text'>
          <span className='card-title'>Cover</span>
          <hr />
          <p>
            Walls, trees, creatures, and other obstacles can provide cover
            during combat, making a target more difficult to harm. A target can
            benefit from cover only when an attack or other effect originate on
            the opposite side of the cover.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cover Type</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Half</td>
                <td>+2 to AC and DEX Saves</td>
              </tr>
              <tr>
                <td>Three-quarters</td>
                <td>Half +5 to AC and DEX Saves</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>Cannot be targeted directly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cover;
