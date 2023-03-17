import React from 'react'
import { Link } from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import {Repos} from './Repos';
import default_img from '../img/default.png' 
import './User.css'

export const User = ({
    avatar_url,
    name, 
    login, 
    followers,
    following,
    location,
    html_url
}) => {
  return (
    <div className='user-container'>    
        <aside className='user-info'>            
            <img src={avatar_url || default_img} alt={login} />
            <div className='username'>
                <h2>{name || '???'}</h2>
                <h3>{login}</h3>
            </div>            
            <div className="info">
                <div className='followers'>
                    <FiUsers/>
                    <p>Seguidores: {followers || '?'}</p>                 
                </div>
                <div className='following'> 
                    <FiUserPlus/>
                    <p>Seguindo: {following || '?'}</p> 
                </div>
            </div>        
            {location && 
                <div className="location">
                    <MdLocationOn/>
                    <p>{location}</p>
                </div>
            }
            <Link to={html_url} target='blank' className='btn'>Seguir</Link>
        </aside>
        {/* <Repos url={`https://api.github.com/users/${login}/repos`}/> */}
    </div>
  )
}
