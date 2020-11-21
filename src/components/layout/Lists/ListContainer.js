import React, { useState } from 'react'
import { getChildByFilter } from '../../../utils/utils'

function ListContainer({children, inputPlaceholder}) {
    const [searchString, setSearchString] = useState("")

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    return (
        <div className="w-11/12 mx-auto bg-white">
            <h2 className="text-2xl text-center uppercase">Container Header</h2>
            <div className="text-center">
                <input 
                className="bg-white focus:outline-none border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder={inputPlaceholder}
                onChange={handleChange}
                />
            </div>
            <ul>
                {getChildByFilter(children, searchString)}
            </ul>
        </div>
    )
}



export default ListContainer
