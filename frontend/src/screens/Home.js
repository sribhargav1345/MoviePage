import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

import "./Home.css";

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchDetails = async () => {

      try {
        const response = await fetch(`https://moviepage-pathend.onrender.com/api/movies/`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const result = await response.json();

        if (!response.ok) {
          console.log("Error retrieving Movies");
        }

        setMovies(result);
        setLoading(false);

      }
      catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchDetails();

  }, [movies]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="header">
        <h1>Movie HomePage</h1>
      </div>
      <div className='container'>
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  )
}
