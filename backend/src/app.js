import express from 'express';
import cors from 'cors';
import bugRoutes from './routes/bugRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

const allowedOrigins = [
  ...(process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',').map(url => url.trim()) : []),
  'http://localhost:3000'
];

app.use(
  cors({
    origin: function (origin, callback) {

      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (/\.vercel\.app$/.test(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS: ' + origin));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/bugs', bugRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ success: true, status: 'ok' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

export default app;
