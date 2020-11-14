import React from 'react';
import PropTypes from 'prop-types' 

const NavItem = ({link, text}) => {

    return (
            <li className="mx-5 hover:bg-white">
                <a href={link} className="text-blue-800 font-semibold h-4 hover:text-tertiary">{text}</a>
            </li>
    )
}

NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}


export default NavItem