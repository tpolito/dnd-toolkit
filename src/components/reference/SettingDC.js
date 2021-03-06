import React from 'react';

const SettingDC = () => {
  return (
    <div className='card'>
      <div className='card blue darken-1'>
        <div className='card-content white-text'>
          <span className='card-title'>Setting A DC</span>
          <hr />
          <table>
            <thead>
              <tr>
                <th>Difficulty</th>
                <th>DC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Very Easy</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Easy</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Hard</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Very Hard</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Nearly Impossible</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SettingDC;
