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

// copied from ChatGPT
router.get("/search_result", (req, res) => {
  res.render("search.ejs", {
    ...shopData,
    search: {
      text: req.query.search_text || "",
      category: req.query.cat_text || ""
    }
  });
});



 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post('/registered', (req, res) => {
  const registered = {first: req.body.first,last: req.body.last,email: req.body.email};
  res.render('register.ejs', { ...shopData, registered });
});


// Survey page (GET)
router.get('/survey', (req, res) => {
  res.render('survey.ejs', { shopName: shopData.shopName, productCategories: shopData.productCategories });
});

// Survey submission (POST)
router.post('/survey', (req, res) => {
  const surveyData = {
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    age: req.body.age,
    category: req.body.category,
    isStudent: req.body.isStudent ? 'Yes' : 'No'
  };

  res.render('survey.ejs', {
    shopName: shopData.shopName,
    productCategories: shopData.productCategories,
    survey: surveyData
  });
});



// Export the router object so index.js can access it
module.exports = router;
