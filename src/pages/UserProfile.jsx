import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar15.jpg'
import { FaCheck, FaEdit } from 'react-icons/fa'
const UserProfile = () => {
    const [avatar, setAvatar] = useState(Avatar)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <section className="profile">
            <div className="container profile__container">
                <Link to={'/myposts/sdaj'} className='btn'>My Posts</Link>

                <div className="profile__details">
                    <div className="avatar__wrapper">
                        <div className="profile__avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <form className="avatar__form">


                            <input type="file" name='avatar' id='avatar' accept='png , jpg ,jpeg' onChange={(e) => { setAvatar(e.target.files[0]) }} />
                            <label htmlFor="avatar"><FaEdit /></label>
                        </form>
                        <button className='profile__avatar-btn'>

                            <FaCheck />
                        </button>
                    </div>

                    <h1>Ernest Acheiver</h1>

                    <form className="form profile__form">
                        <p className="form__error-message">
                            this is an error message
                        </p>
                        <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder='CurrentPassword' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                        <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        <button type="submit" className='btn primary'> Update Details</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UserProfile