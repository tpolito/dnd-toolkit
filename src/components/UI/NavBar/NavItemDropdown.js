import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types' 

const NavItemDropdown = ({text, dropdown}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropDownItem = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown)
        }
    //eslint-disable-next-line
    }, [])

    const handleMouseDown = e => {
        if(dropDownItem.current.contains(e.target)) {
            return;
        }

        setShowDropdown(false)
    }

    const handleClick = ((e) => {
        e.preventDefault()
        setShowDropdown(!showDropdown)
    })

    // TODO: Add an arrow to the button to indicate its a dropdown
    return (
        <li className="relative p-5 hover:bg-white" ref={dropDownItem}>
            <button onClick={handleClick} className="font-semibold focus:outline-none">
                {text}
            </button>
            {showDropdown ? (
                <div className="bg-white absolute right-0 rounded-lg mt-1 z-10 py-2 w-48">
                    {dropdown.map(item => {
                        return (
                            <a key={item.key} href={item.link} className="block py-2 text-blue-800 font-semibold px-4 hover:text-tertiary duration-150">{item.text}</a>
                        )
                    })}
                </div>
            ): null}
        </li>
    )
}

NavItemDropdown.propTypes = {
    text: PropTypes.string.isRequired,
    dropdown: PropTypes.array.isRequired
}


export default NavItemDropdown;