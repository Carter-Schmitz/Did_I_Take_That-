const { Model, DataTypes } = require("sequilize");
const sequilize = require("../config/connection");

class Medication extends Model {}

Medication.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
