async function getRestaurants() {
  const response = await fetch("http://127.0.0.1:1337/api/restaurants");
  //console.log(response);
  data = await response.json();
  //console.log(data);
  restaurants = data.data;
  console.log(restaurants.length);

  const restaurantsRow = document.getElementById("restaurants");

  for (i = 0; i < restaurants.length; i++) {
    restaurantsAttribute = restaurants[i].attributes;
    console.log(restaurantsAttribute);
    let RestaurantName = restaurantsAttribute.Name;
    let restaunrantDescription = restaurantsAttribute.Description;
    let restaurantCreatedAt = restaurantsAttribute.createdAt;

    const HTMLData = `

    <h1 s>${RestaurantName}</h1>
    <p>${restaunrantDescription}</p>
    <p>${restaurantCreatedAt}</p>
    <hr>
    `;

    restaurantsRow.innerHTML += HTMLData
  }
}
