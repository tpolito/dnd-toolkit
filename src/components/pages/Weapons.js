import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import uuid from 'uuid';
import ListContainer from '../layout/Lists/ListContainer'
import ListItem from '../layout/Lists/ListItem'

const Weapons = () => {
    useEffect(() => {
        getWeapons();
        document.title = 'Weapons'
    //eslint-disable-next-line
    }, [])

    let [weapons, setWeapons] = useState([]);
    const [loading, setLoading] = useState(false);

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

    if(loading) {
        return <Preloader />
    }

    return (
        <ListContainer inputPlaceholder="Search for a weapon..." sorted={true}>
            {weapons && weapons.map((weapon) => <ListItem text={weapon.name} url={`/weapons/desc/${weapon.slug}`} key={uuid()} />)}
        </ListContainer>
    )
}

export default Weapons