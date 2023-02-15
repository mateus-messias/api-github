import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import './User.css'

export const User = ({
    login, 
    avatar_url, 
    followers,
    following,
    location,
    html_url
}) => {
  return (
    <div className='user'>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && 
            <div className="location">
                <MdLocationOn/>
                <p>{location}</p>
            </div>
        }
        <div className="info">
            <div className='followers'>
                <FiUsers/>
                <p>Seguidores:</p> 
                <p>{followers}</p>
            </div>
            <div className='following'> 
                <FiUserPlus/>
                <p>Seguindo:</p> 
                <p>{following}</p>
            </div>
        </div>
        
        <Link to={html_url} className='btn'>Seguir</Link>
    </div>
  )
}
