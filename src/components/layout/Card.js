import React from 'react';

const Card = ({title, desc, link}) => {

    return(
        <div className="shadow-md relative w-1/2 h-48 bg-tertiary text-black m-3">
            <div className="p-3">
                <p className="text-3xl">{title}</p>
                <hr />
                <p>{desc}</p>

                <a href={link} className="text-blue-400 absolute bottom-0 left-0">Link</a>
            </div>
        </div>
    )
}

export default Card;