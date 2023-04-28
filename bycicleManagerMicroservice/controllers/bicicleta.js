const Bicicleta = require("../models/bicicleta");

exports.list = function (re, res) {

    res.render("bicicletas/index", { bicis: Bicicleta.allBicis });

};

exports.show = function (req, res) {

    var bici = Bicicleta.findById(req.params.id);

    res.send(bici)

};

exports.create_post = function (req, res) {

    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);

    bici.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.add(bici);

    res.redirect("/bicicletas");

};

exports.update_post = function (req, res) {

    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);

    bici.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.update(req.body.id, bici);

    res.redirect("/bicicletas");

};


exports.delete = function (req, res) {

    Bicicleta.removeById(req.body.id);

    res.redirect("/bicicletas");

};