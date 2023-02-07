// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model")

router.get("/celebrities/create", (req, res, next) => {

    res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res) => {

    const { name, occupation, catchPhrase } = req.body

    Celebrity.create({
        name: name,
        occupation: occupation,
        catchPhrase: catchPhrase
    })
     .then(() => {
            res.redirect("/celebrities");
        })
        .then(() => {
      res.render("/celebrities/create");
        })
    .catch((err) => {
       res.render("/celebrities/new-celebrity")
   })
})


render.get("/celebrities ", (req, res) => {
   
    Celebrity.find()  
      .then((celebritiesDB) => {
         res.render("celebrities/celebrities.hbs", {celebrities : celebritiesDB})
      })
})
// all your routes here

module.exports = router;