import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function Navbar({title,icon}) {
    return (
        <div className='navbar bg-danger' style={{fontFamily:'Arial'}}>
            <h1>
    <i className={icon}>{ title}</i>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/about'>AboutMe</Link>
                </li>
            </ul>
            
        </div>
    )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact_Keeper_App.Wojtkowski()',
    icon: 'fas fa-id-card-alt'
}
export default Navbar
