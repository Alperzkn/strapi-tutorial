async function getRestaurants() {
  const response = await fetch("http://127.0.0.1:1337/api/restaurants");
  //console.log(response);
  rawData = await response.json();
  //console.log(rawData);
  restaurants = rawData.data;
  console.log(restaurants.length);

  const restaurantsRow = document.getElementById("restaurants");

  for (i = 0; i < restaurants.length; i++) {
    restaurantsAttribute = restaurants[i].attributes;
    console.log(restaurantsAttribute);
    let restaurantName = restaurantsAttribute.Name;
    let restaunrantDescription = restaurantsAttribute.Description;
    let restaurantCreatedAt = restaurantsAttribute.createdAt;

    const HTMLData = `

    <h1>${restaurantName}</h1>
    <p>${restaunrantDescription}</p>
    <p>${restaurantCreatedAt}</p>
    <hr>
    `;

    restaurantsRow.innerHTML += HTMLData
  }
}
