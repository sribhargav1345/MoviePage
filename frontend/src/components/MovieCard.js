import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div className="card">
        <div className='imageuu'>
            <img src={movie.picture} alt={movie.name} />
        </div>
        <div className='right-part'>
            <h1 className='naming'>{movie.name}</h1>
            <div className='starting'>
                <div className='main-roles'>
                    <h4>Main Roles:</h4>
                    <p>{movie.main}</p>
                </div>
                <div className='short'>
                    <h4>Description:</h4>
                    <p>{movie.long_description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
