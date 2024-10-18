export async function fetchItems() {

  // Funktionen hämtar data från fireBase databasen

  const url = "https://database-22220-default-rtdb.europe-west1.firebasedatabase.app/.json";

  const response = await fetch(url);

  //Responsen returneras i JSON Format

  const items = await response.json();

  //console.log(items);

  const itemsArray = [];

  //ItemsArray pushar varje objekt in i en index för varje objekt
  //som finns i databasen

  for (const property in items) {

    //console.log(property, items[property]);
    itemsArray.push(items[property]);
  }

  // console.log(itemsArray);

  //ItemsArray returneras

  return itemsArray;
}