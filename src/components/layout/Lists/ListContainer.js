import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getChildByFilter, getChildByFilterAndSort } from '../../../utils/utils'

function ListContainer({children, inputPlaceholder, sorted, header}) {
    const [searchString, setSearchString] = useState("")

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    return (
        <div className="w-11/12 mx-auto bg-white">
            <h2 className="text-2xl text-center uppercase">{header}</h2>
            <div className="text-center">
                <input 
                className="bg-white focus:outline-none border border-gray-300 py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder={inputPlaceholder}
                onChange={handleChange}
                />
            </div>
            <ul>
                {sorted ? getChildByFilterAndSort(children, searchString) : getChildByFilter(children, searchString)}
            </ul>
        </div>
    )
}

ListContainer.propTypes = {
    children: PropTypes.node.isRequired,
    inputPlaceholder: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    sorted: PropTypes.bool,
  };

export default ListContainer
