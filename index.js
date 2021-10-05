const express = require("express");

// library that used for this social app
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 8800;

mongoose.connect(`${process.env.MONGO_URL}`, () => {
	console.log("MongoDB connected");
});

// middlewares
dotenv.config();

app.listen(PORT, (req, res) =>
	console.log(`server is running on port ${PORT}`)
);
