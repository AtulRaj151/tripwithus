const sortPrice = (hotels, isIncreasing) => {
     
       return hotels.sort((item1, item2) => {
            if(isIncreasing) {
                return item1.price - item2.price;
            }else{
                return item2.price - item1.price;
            }
       })
};

const sortRating = (hotels, isIncreasing) => {
     
    return hotels.sort((item1, item2) => {
         if(isIncreasing) {
             return item1.rating - item2.rating;
         }else{
             return item2.rating - item1.rating;
         }
    })
};

const sortReviews = (hotels, isIncreasing) => {
     
    return hotels.sort((item1, item2) => {
         if(isIncreasing) {
             return item1.reviews - item2.reviews;
         }else{
             return item2.reviews - item1.reviews;
         }
    })
};

const filterByAmenity = (hotels, value) => {
    return hotels.filter((item) => item?.amenity.toLowerCase() == value);
};

const filterByCountry = (hotels, country) => {
    return hotels.filter((item) => item?.country.toLowerCase() == country);
}

const filterByCategory = (hotels, category) => {
    return hotels.filter((item) => item?.category.toLowerCase() == category);
}


module.exports = { sortPrice, sortRating, sortReviews, filterByAmenity, filterByCountry, filterByCategory};