import React from 'react';

const Card = ({title, desc, link}) => {

    return(
        <div className="shadow relative w-3/4 h-48">
            <div className="p-3">
                <p className="text-3xl">{title}</p>
                <hr />
                <p>{desc}</p>

                <a href={link} className="text-red-400 absolute bottom-0 left-0">Link</a>
            </div>
            
        </div>
    )
}

export default Card;