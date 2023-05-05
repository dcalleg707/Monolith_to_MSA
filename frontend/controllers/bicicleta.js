const axios = require("axios");

exports.list = function (req, res) {

    axios.get(process.env.BICYCLES_URL + "/api/bicycles/").then(data => {
        res.render("bicicletas/index", {bicis: data['data']});
    })
        .catch((err) => {
            console.log(err)
            res.render("bicicletas/index", {bicis: []});
        })
};

exports.show = function (req, res) {

    res.render("bicicletas/show", {bici});

};

exports.create_get = function (req, res) {

    res.render("bicicletas/create");

};

exports.create_post = function (req, res) {

    axios.post(process.env.BICYCLES_URL + "/api/bicycles",
        {
            color: req.body.color,
            model: req.body.model,
            location: [req.body.latitude, req.body.longitude]
        }
    ).then(() => res.redirect("/bicicletas"))
        .catch((err) => {
            console.log(err.message)
            res.redirect("/bicicletas")
        })
};

exports.update_post = function (req, res) {
    axios.put(process.env.BICYCLES_URL + "/api/bicycles/" + req.params.id,
        {
            color: req.body.color,
            model: req.body.model,
            location: [req.body.latitude, req.body.longitude]
        }
    ).then(() => res.redirect("/bicicletas"))
        .catch((err) => {
            console.log(err.message)
            res.redirect("/bicicletas")
        })

};

exports.update_get = function (req, res) {

    axios.get(process.env.BICYCLES_URL + "/api/bicycles/" + req.params.id)
        .then((data) => res.render("bicicletas/update", {bici: data['data']}))
        .catch((err) => {
            console.log(err.message)
            res.redirect("/bicicletas")
        })

};


exports.delete = function (req, res) {
    axios.delete(process.env.BICYCLES_URL + "/api/bicycles/" + req.params.id)
        .then(() => res.redirect("/bicicletas"))
        .catch((err) => {
            console.log(err.message)
            res.redirect("/bicicletas")
        })
};