import express from 'express';
import cors from 'cors';
import bugRoutes from './routes/bugRoutes.js';

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://bugtracker-frontend-pq7x7ksh5-morgan-wambulwas-projects.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

app.use('/api/bugs', bugRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
