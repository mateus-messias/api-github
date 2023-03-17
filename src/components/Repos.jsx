import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Repos.css'

export const Repos = ({url}) => {
//   const {username} = useParams()
  const [repos, setRepos] = useState([])  

  useEffect(() => {
    const loadRepo = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.log(error)
      }      
    }
    loadRepo()
  }, [])

  return (
    <div className='repo-container'>
        <h2 className='repo-title'>Repositórios: {repos.length}</h2>
        <div className='repos'>          
          {repos.map((repo) => {
            const {name, description, html_url} = repo
            return (
              <div className="repo-card">
                <h2>{name}</h2>
                <h4>{description || '...'}</h4>
                <div>
                  <Link to={html_url} target='blank' >ver</Link>                  
                </div>
              </div>
            )
          })}
        </div>
        
    </div>
  )
}
