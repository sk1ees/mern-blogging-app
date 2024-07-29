import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
// import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import '../index.css'
const Header = () => {
    return (
        <nav>
            <div className="container nav_container">
                <Link to='/' className='nav__logo'>
                    <img src={Logo} alt="Navbar_Logo" srcset="" />
                </Link>
                <ul className="nav__menu">
                    <li><Link to="/profile">Ernest Acheiver</Link></li>
                    <li><Link to="/create">Create Post</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>

                <button className='nav__toggle-btn'>
                    <AiOutlineClose />
                </button>
            </div>
        </nav>
    )
}

export default Header