const express = require("express");

const router = express.Router();

const bicicletaController = require("../controllers/bicicleta");

router.get("/", bicicletaController.list);

router.get("/:id/show", bicicletaController.show);

router.get("/create", bicicletaController.create_get);

module.exports = router;