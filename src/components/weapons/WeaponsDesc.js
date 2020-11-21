import React, { useState, useEffect, Fragment } from 'react';
import Preloader from '../layout/Preloader';

const WeaponDesc = ({match, history}) => {
    const slug = match.params.slug;
    // On Page Load
    useEffect(() => {
        getWeapon(slug);
        document.title = 'Spell Description';
    //eslint-disable-next-line
    }, []);

    // State
    const [weapon, setWeapon] = useState({});
    const [loading, setLoading] = useState(false);

    const myHeaders = {
        "Content-Type": "application/json"
    };

    const getWeapon = async (slug) => {
        setLoading(true);
        const res = await fetch("https://api.open5e.com/weapons/", {
            method: "GET",
            headers: myHeaders
          });
        const data = await res.json();
        const weapons = data.results;
        const weapon = weapons.filter(weapon => {
            return weapon.slug === slug
        })
        setWeapon(weapon[0]);

        setLoading(false);
    };

    if(loading) {
        return <Preloader />
    }

    return(
        <Fragment>
      <a href='/weapons' className='waves-effect waves-light'>
        <i className='material-icons left'>arrow_back</i>
      </a>
      <div className='card'>
        <div className='col s12'>
          <h4 className='center h4-pt'>{weapon.name}</h4>
          <div className='divider' />
        </div>
        <div className='row'>
          <div className='col s6 m3'>
            <p>
              <strong>Category: </strong>
              {weapon.category}
            </p>
            <p>
              <strong>Cost: </strong>
              {weapon.cost}
            </p>
          </div>
          <div className='col s6 m3'>
            <p>
              <strong>Damage: </strong>
              {weapon.damage_dice}{' '}{weapon.damage_type}
            </p>
            <p>
              <strong>Weight: </strong>
              {weapon.weight}
            </p>
          </div>
          {weapon.properties && weapon.properties[0] ? (<div className='col s6 m3'>
            <p>
              <strong>Properties: </strong>
              {weapon.properties && weapon.properties.map(p => p + ', ')}
            </p>
          </div>) : null}
        </div>
      </div>
    </Fragment>
    )
}

export default WeaponDesc