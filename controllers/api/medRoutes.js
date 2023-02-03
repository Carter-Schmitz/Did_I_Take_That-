const router = require("express").Router();
const { User, Medication } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const medicationData = await Medication.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(medicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:name", withAuth, async (req, res) => {
  try {
    const medicationData = await Medication.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!medicationData) {
      res.status(404).json({ message: "No medication found with that name!" });
      return;
    }

    res.status(200).json(medicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const medicationData = await Medication.create({
      name: req.body.name,
      dosage: req.body.dosage,
      frequency: req.body.frequency,
      taken: req.body.taken,
      quantity: req.body.quantity,
      user_id: req.session.user_id
    });
    res.status(200).json(medicationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const medicationData = await Medication.update(
      {
        medication_name: req.body.medication_name,
        dosage: req.body.dosage,
        frequency: req.body.frequency,
        taken: req.body.taken,
        quantity: req.body.quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(medicationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const medicationData = await Medication.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!medicationData) {
      res.status(404).json({ message: "No medication found with that name!" });
      return;
    }

    res.status(200).json(medicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
