// app.js
import express from 'express';
import cors from 'cors';
import bugRoutes from './routes/bugRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

const allowedOrigin = process.env.CLIENT_URL || 'http://localhost:3000'; 

const corsOptions = {
  // Use the specific client URL when in production, or localhost for development
  origin: allowedOrigin, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions)); 

app.use(express.json());

app.use('/api/bugs', bugRoutes);

app.use(errorHandler);

export default app;