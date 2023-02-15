import React from 'react'
import { Search } from '../components/Search'
import { User } from '../components/User'
import { Error } from '../components/Error'
import { useState } from 'react'
import './Home.css'

export const Home = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const loadUser = async (userName) => {
    setError(false)
    setUser(null)

    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    // console.log(data);

    if(response.status === 404){        
        setError(true)
    }

    const {avatar_url, login, location, followers, following, html_url} = data
    const userData = {
        avatar_url,
        login, 
        location, 
        followers, 
        following,
        html_url
    }
    setUser(userData)
  }
  return (
    <div className='home-container'>
        <h2 className='title'>Github Users</h2>
        <Search loadUser={loadUser}/>
        {!error && user && <User {...user}/>}
        {error && <Error/>}
    </div>
  )
}
