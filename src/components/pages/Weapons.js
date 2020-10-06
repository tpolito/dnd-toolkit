import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import uuid from 'uuid';
import WeaponItem from '../weapons/WeaponItem'

const Weapons = () => {
    useEffect(() => {
        getWeapons();
        document.title = 'Weapons'
    }, [])

    let [weapons, setWeapons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchString, setSearchString] = useState('');

    const myHeaders = {
        "Content-Type": "application/json"
    };

    async function getWeapons() {
        setLoading(true);
        const res = await fetch("https://api.open5e.com/weapons/", {
            method: "GET",
            headers: myHeaders
          });
        const data = await res.json();
        setWeapons(data.results);
        setLoading(false);
    }

    const handleChange = e => {
        setSearchString(e.target.value);
      };

    if (searchString.length > 0) {
        weapons = weapons.filter((i) => {
          return i.name.toLowerCase().match(searchString.toLowerCase());
        });
    }

    if(loading) {
        return <Preloader />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Weapon List List</h4>
                <input
                type='text'
                placeholder='Search for a spell'
                onChange={handleChange}
                />
            </li>
            {weapons &&
                weapons.map((weapon) => <WeaponItem weapon={weapon} key={uuid()} />)}
    </ul>
    )
}

export default Weapons