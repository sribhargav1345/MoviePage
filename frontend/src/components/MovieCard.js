import React from 'react';
import "./MovieCard.css";

export default function MovieCard({movie}) {
  return (
    <div className="card carding2">
        <div className='first-line'>
            <div className='imageuu2'>
                <img src={movie.picture} alt={movie.name} />
            </div>
            <div className='side'>
                <h1 className='naming2'>{movie.name}</h1>
                <div className='main-roles2'>
                    <h3>Main Roles:</h3>
                    <p>{movie.main}</p>
                </div>
            </div>
        </div>
        <div className='right-part2'>
            <div className='short2'>
                <p>{movie.long_description}</p>
            </div>
        </div>
    </div>
  )
}
