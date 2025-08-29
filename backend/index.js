import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'
import cors from "cors";

import { moviesData } from './utils/moviesData.js';
import { popularMoviesData } from './utils/popularMoviesData.js';
import { topRatedMovies } from './utils/topRatedMovies.js';
import { upcomingMovies } from './utils/upcomingMovies.js';

const app = express();

databaseConnection();

dotenv.config({
    path: ".env"
})

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};

app.use(cors(corsOptions));

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api/v1/user", userRoute);

// Movies endpoint
app.get("/movies", (req, res) => {
    res.json(moviesData);
});

app.get("/popular",(req,res)=>{
    res.json(popularMoviesData);
})

app.get("/top-rated",(req,res)=>{
    res.json(topRatedMovies);
})

app.get("/upcoming",(req,res)=>{
    res.json(upcomingMovies);
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});