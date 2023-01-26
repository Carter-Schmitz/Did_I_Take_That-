const { Model, DataTypes } = require("sequilize");
const sequilize = require("../config/connection");

class Medication extends Model {}

Medication.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequilize,
    freezeTableName: true,
    underscored: true,
    modelname: "medication",
  }
);

module.exports = Medication;
