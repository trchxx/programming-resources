import express from 'express';
import loginRoutes from './routes/loginRoutes.js';

process.loadEnvFile();

const app = express();
app.use(express.json());

// Rutas de login
app.use('/', loginRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Login service running on port ${PORT}`));