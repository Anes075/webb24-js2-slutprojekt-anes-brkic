export async function fetchItems(){

const url = "https://database-22220-default-rtdb.europe-west1.firebasedatabase.app/.json";

    const response = await fetch(url);

    const items = await response.json();

  //  console.log(items);
    const itemsArray = [];

    for (const property in items){
        itemsArray.push(`${items[property].name}`);
        itemsArray.push(items[property].price);
        itemsArray.push(items[property].stock);
    }
    //loopa igenom objektet item med tex for in loop
    // i varje loop, pusha objektet till itemsArray

    console.log(itemsArray);
    return itemsArray;

}

// const obj = {
//     0: 1,
//     1: 2
// }

// obj[0]

// const obj2 = {
//     ett: 1,
//     two: 2
// }

// obj2.ett
// obj2["ett"]

// const key = "two";
// obj2[key]
// obj2.two