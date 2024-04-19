const apiKey='';
const Yelp={
search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https:api.yelp.com/v3/businesses/search?term=${encodeURIComponent(term)}&location=${encodeURIComponent(location)}&sort_by=${encodeURIComponent(sortBy)}`
    ,{headers:{Authorization :`Bearer ${apiKey}`}})
    .then(jsonResponse => {
        if (jsonResponse.hasOwnProperty('businesses')) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              imageUrl: business.image_url
            };
          });
        } else {
          throw new Error('No businesses found!');
        }
      })
    }};

    export default Yelp;