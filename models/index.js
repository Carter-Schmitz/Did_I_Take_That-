const User = require("./User");
const Medication = require("./Medication");

Medication.belongsTo(User, {
  foreignKey: "medication_id",
  onDelete: "CASCADE",
});

User.hasMany(Medication, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Medication };
