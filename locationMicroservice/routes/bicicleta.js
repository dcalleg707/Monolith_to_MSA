const express = require("express");

const router = express.Router();

const bicicletaController = require("../controllers/bicicleta");

router.get("/bicycle", bicicletaController.list);

module.exports = router;