const express = require("express");
const router = express.Router();

const movies = require("../models/movie");

router.get("/movies/:movie_id" , async(req,res) => {

    const {movie_id} = req.params;

    try{
        const movie = await movies.findById(movie_id);

        if(!movie){
            return res.status(400).json({ message: "Movie ID not registered"});
        }

        res.status(200).json({ success: true, movie });
    }
    catch(err){
        res.status(500).json({ error: "Internal Server Error"});
    }
});

// I am just creating this post request to add the data
router.post("/movies", async(req,res) => {

    console.log(req.body);
    try{
        const name = req.body.name;

        const findName = await movies.findOne({ name: name });
        if(findName){
            return res.status(400).json({ message: "Movie aldreay present in database"});
        }

        const new_movie = new movies({
            name: req.body.name,
            picture: req.body.picture,
            main: req.body.main,
            short_description: req.body.short_description,
            long_description: req.body.long_description
        });

        await new_movie.save();

        return res.status(200).json({ success: true, messagee: "Movie added"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ err: "Internal Server Error"});
    }
});

// Getting all movies in the home page
router.get("/movies", async(req,res) => {
    try{
        const movie = await movies.find();
        res.send(movie);
    }
    catch(error){
        return res.status(500).json({ err: "Internal Server Error"});
    }
})

module.exports = router;