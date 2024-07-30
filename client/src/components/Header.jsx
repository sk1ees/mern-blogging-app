import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { AiOutlineClose } from 'react-icons/ai'
import '../index.css'
import { FaBars } from 'react-icons/fa'
const Header = () => {
    const [isNavShowing, setisNavShowing] = useState(window.innerWidth > 800 ? true : false)

    const closeNavHandler = () => {
        if (window.innerWidth < 800) {
            setisNavShowing(false);
        } else {
            setisNavShowing(true)
        }
    }

    return (
        <nav>
            <div className="container nav_container">
                <Link to='/' className='nav__logo' onClick={closeNavHandler}>
                    <img src={Logo} alt="Navbar_Logo" srcset="" />
                </Link>
                {isNavShowing && <ul className="nav__menu">
                    <li><Link to="/profile/skjdajk" onClick={closeNavHandler}>Ernest Acheiver</Link></li>
                    <li><Link to="/create" onClick={closeNavHandler}>Create Post</Link></li>
                    <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
                    <li><Link to="/logout" onClick={closeNavHandler}>Logout</Link></li>
                </ul>}

                <button className='nav__toggle-btn' onClick={() => { setisNavShowing(!isNavShowing) }}>

                    {isNavShowing ? <AiOutlineClose /> : <FaBars />}

                </button>
            </div>
        </nav>
    )
}

export default Header