const Bicicleta = require("../models/bicicleta");

exports.list = function (re, res) {

    res.render("bicicletas/index", { bicis: Bicicleta.allBicis });

};
