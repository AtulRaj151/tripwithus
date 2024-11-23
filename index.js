const express = require('express');
const cors = require('cors');
const { hotels } = require('./hotels');
const { sortPrice, sortRating, sortReviews, filterByAmenity, filterByCountry, filterByCategory } = require('./utils');

const app = express();
const port = 3010;

app.use(cors());

app.get("//hotels",(req,res)=> {
   res.status(200).json({ hotels: hotels});
});

app.get("/hotels/sort/pricing", (req, res) => {
      const { pricing } = req.query;
      let result;
      if(pricing == "low-to-high") {
        result = sortPrice(hotels, true);
      }else if(pricing == "high-to-low") {
        result = sortPrice(hotels, false);
      }
      return res.json({ hotels : result });
});

app.get("/hotels/sort/rating", (req, res) => {
  const { rating } = req.query;
  let result;
  if(rating == "low-to-high") {
    result = sortRating(hotels, true);
  }else if(rating == "high-to-low") {
    result = sortRating(hotels, false);
  }
  return res.json({ hotels : result });
});

app.get("/hotels/sort/reviews", (req, res) => {
  const { reviews } = req.query;
  let result;
  if(reviews == "least-to-most") {
    result = sortReviews(hotels, true);
  }else if(reviews == "most-to-least") {
    result = sortReviews(hotels, false);
  }
  return res.json({ hotels : result });
});

app.get("/hotels/filter/amenity", (req, res) => {
  const { amenity } = req.query;
  let result = filterByAmenity(hotels, amenity.toLowerCase());
  return res.json({ hotels : result });
});

app.get("/hotels/filter/country", (req, res) => {
  const { country } = req.query;
  let result = filterByCountry(hotels, country.toLowerCase());
  return res.json({ hotels : result });
});

app.get("/hotels/filter/category", (req, res) => {
  const { category } = req.query;
  let result = filterByCategory(hotels, category.toLowerCase());
  return res.json({ hotels : result });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
