const axios = require("axios");

exports.list = function (req, res) {

    axios.get("http://localhost:3004/api/bicycles/").then(data =>  {
        res.render("bicicletas/index", { bicis: data['data'] });
    })
};

exports.show = function (req, res) {

    res.render("bicicletas/show", { bici });

};

exports.create_get = function (req, res) {

    res.render("bicicletas/create");

};

exports.create_post = function (req, res) {

    axios.post("http://localhost:3004/api/bicycles", 
    {
        color: req.body.color,
        model: req.body.model,
        location: [req.body.latitude, req.body.longitude]
    }
    ).then( () => res.redirect("/bicicletas"))
    .catch((err) => {
        console.log(err.message)
        res.redirect("/bicicletas")
    })
};

exports.update_post = function (req, res) {

    res.redirect("/bicicletas");

};


exports.delete = function (req, res) {
    console.log(req.params.id)
    axios.delete("http://localhost:3001/api/bicycles/" + req.params.id)
    .then( () => res.redirect("/bicicletas"))
    .catch((err) => {
        console.log(err.message)
        res.redirect("/bicicletas")
    })
};