import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import './Search.css'

export const Search = ({loadUser}) => {
  const [userName, setUserName] = useState('')

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      loadUser(userName)
    }
  }

  return (
    <div className='search-container'>
      <div className='input-container'>
        <input 
          type="text" 
          className='seach-input'
          placeholder='Digite o nome do usuario' 
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button 
          className='search-btn'
          onClick={() => loadUser(userName)}
        >
          <FaSearch/>
        </button>
      </div>
    </div>
  )
}
