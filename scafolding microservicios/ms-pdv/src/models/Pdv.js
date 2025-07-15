import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

const Pdv = sequelize.define('Pdv', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  // price: {
  //   type: DataTypes.FLOAT,
  //   allowNull: false,
  // },
  // stock: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: 0,
  // }
});

export default Pdv;