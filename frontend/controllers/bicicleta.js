
exports.list = function (re, res) {

    res.render("bicicletas/index", { bicis: Bicicleta.allBicis });

};

exports.show = function (req, res) {

    res.render("bicicletas/show", { bici });

};

exports.create_get = function (req, res) {

    res.render("bicicletas/create");

};

exports.create_post = function (req, res) {

    res.redirect("/bicicletas");

};

exports.update_post = function (req, res) {

    res.redirect("/bicicletas");

};


exports.delete = function (req, res) {

    res.redirect("/bicicletas");

};