import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

function Navbar({title,icon}) {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const {isAuthenticated,logout,user} = authContext
    const {clearContacts} = contactContext

    const onLogout = () => {
        logout();
        clearContacts()
    }

    const authLinks =(
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
            <li>
                <Link to='/about'>AboutMe</Link>
            </li>
        </Fragment>
    )
   
    const guestLinks =(
        <Fragment>
           <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                <Link to='/about'>AboutMe</Link>
            </li>
        </Fragment>
    )


    return (
        <div className='navbar bg-danger' style={{fontFamily:'Arial'}}>
            <h1>
    <i className={icon}>{ title}</i>
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
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