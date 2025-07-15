import express from 'express';
import { sequelize } from './config/db.js';
import  pdvRoutes from './routes/pdvRoutes.js';

process.loadEnvFile();

const app = express();
app.use(express.json());

// Rutas de pdv
app.use('/', pdvRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Pdv service running on port ${PORT}`));


// Conectar a la base de datos y levantar el servidor
// sequelize.sync({ force: true }).then(() => {
//   console.log('Database & tables created!');
//   app.listen(PORT, () => console.log(`Pdv service running on port ${PORT}`));
// }).catch(err => {
//   console.error('Error initializing database:', err);
// });