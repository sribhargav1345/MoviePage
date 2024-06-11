const express = require("express");
const mongoDB = require("./db");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoDB();
const PORT = process.env.PORT || 5000;


app.use("/api", require("./controller/Movie"));

app.listen(PORT , () => {
    console.log(`Server is running on port number ${PORT}`);
})