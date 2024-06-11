import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./screens/Home";
import Movie from "./screens/Movie";

export default function Routing() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/movies/:movie_id" element={<Movie />} />
                </Routes>
            </Router>
        </div>
    )
}
