import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function Movie() {

  const {movie_id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    const loadData = async() => {
      try{

        console.log(movie_id);

        const response = await fetch(`http://localhost:5000/api/movies/${movie_id}`, {
          method: "GET",
          "headers": {
            "Content-Type": 'application/json'
          }
        });

        const result = await response.json();

        if(!response.ok){
          console.log("Failed to fetch movie details");
        }

        setMovie(result.movie);
      }
      catch(err){
        console.log(err);
      }
    }

    loadData();
  },[movie_id]);

  return (
    <div>
        <MovieCard key={movie.id} movie={movie}/>
    </div>
  )
}
