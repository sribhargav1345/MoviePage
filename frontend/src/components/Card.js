import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; 

const Card = ({movie}) => {
    return (
        <Link to={`/movies/${movie._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>  
            <div className="card carding">
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
                            <p>{movie.short_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
