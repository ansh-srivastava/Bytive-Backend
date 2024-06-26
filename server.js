import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import peopleRoutes from './routes/people.routes.js'
import authRoutes from './routes/auth.routes.js'
import dbConnect from './config/database.js';
import cookieParser from "cookie-parser";

const server = express();

dotenv.config();

// Connect to the database
dbConnect();

// Middleware
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true })); // Instead of bodyParser.urlencoded
server.use(cookieParser());

// Routes
server.use('/auth', authRoutes);
server.use('/people', peopleRoutes);



server.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port 8000');
});


