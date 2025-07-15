import Sequelize from 'sequelize';

process.loadEnvFile();

export const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});