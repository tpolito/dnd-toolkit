import React from 'react';

const Card = ({title, desc, link}) => {

    return(
        <div className="shadow-md relative w-10/12 h-56 bg-tert text-black m-3 md:w-10/12">
            <div className="p-3">
                <p className="text-3xl">{title}</p>
                <hr />
                <p>{desc}</p>

                <a href={link} className="text-white absolute bottom-0 left-0">Link</a>
            </div>
        </div>
    )
}

export default Card;