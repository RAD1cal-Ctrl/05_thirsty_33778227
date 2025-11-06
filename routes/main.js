// Create a new router
const express = require("express");
const router = express.Router();
// Define our data
var shopData = {shopName: "Thirsty Student Shop",
                productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
  shops: [
    {name: "Central Shop",
      manager: "Sarah Collins",
      address: "123 Main Street, Dublin"},
    {name: "Riverside Shop",
      manager: "Mark O’Brien",
      address: "25 River Road, Waterford"},
    {name: "Goldsmiths Campus",
      manager: "Emily Donell",
      address: "Goldsmiths University, London"}]};


// Handle the main routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
});


router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
}); 

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.cat_text);
 });

 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req, res) => {
  res.send('Hello ' + req.body.first + ' ' + req.body.last + ' you are now registered!' + req.body.email);
});


// Export the router object so index.js can access it
module.exports = router;
