const display = document.getElementById("display");

const foods = [
  "French Fries",
  "Burger",
  "Pizza",
  "Fish",
  "Pasta",
  "Tomato soup and grilled cheese",
  "Salad",
  "Asian food",
  "Steak",
  "Fried chicken",
  "In-n-out",
  "Zeek's pizza",
  "Chocolate chip cookies",
  "Sandwich"
];

function spin() {
  for(let i = 0; i < foods.length; i++) {
    task(i);
  }
  
}

function task(i) {
  setTimeout(function() {
    for(let j = 0; i < foods.length; j++) {
      display.value = foods[j];
    }
    display.value = "test";
  }, 200* j);
}