import React from 'react';

const HomePageCard = ({title, desc, link}) => {
    
    return (
        <div className='card'>
            <div className='card blue darken-1'>
              <div className='card-content white-text'>
                <span className='card-title'>{title}</span>
                <hr />
                <p>
                  {desc}
                </p>
              </div>
              <div className='card-action'>
                <a href={link} className='white-text'>
                  Click me to check it out!
                </a>
              </div>
            </div>
          </div>
    )
}

export default HomePageCard;