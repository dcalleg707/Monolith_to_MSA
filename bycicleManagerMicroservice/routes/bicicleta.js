const express = require("express");

const router = express.Router();

const bicicletaController = require("../controllers/bicicleta");

router.get("/bicycle", bicicletaController.list);

router.get("/bicycle/:id", bicicletaController.show);

router.post("/bicycle", bicicletaController.create_post);

router.post("/bicycle/:id", bicicletaController.update_post);

router.post("/bicycle/:id/delete", bicicletaController.delete);

module.exports = router;