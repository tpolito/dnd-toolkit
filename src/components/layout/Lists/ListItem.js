import React from 'react'
import PropTypes from 'prop-types'

function ListItem({text, url}) {
    return (
        <li className="font-secondary bg-secondary border-b border-solid border-main py-2 px-10 hover:text-white">
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
