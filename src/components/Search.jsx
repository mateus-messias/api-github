import React from 'react'
import {FaSearch} from 'react-icons/fa'

export const Search = () => {
  return (
    <div>
        <h2>Busque por um Usuario</h2>
        <div>
            <input type="text" placeholder='Digite o nome do usuario' />
            <button><FaSearch/></button>
        </div>
    </div>
  )
}
