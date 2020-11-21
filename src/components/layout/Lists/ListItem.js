import React from 'react'
import PropTypes from 'prop-types'

function ListItem({text, url}) {
    return (
        <li className="bg-blue-300 border-b border-solid border-black py-2 px-10 hover:text-red-600">
           <a href={url}>{text}</a>
        </li>
    )
}

ListItem.defaultProps = {
    __TYPE: 'ListItem'
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

export default ListItem
