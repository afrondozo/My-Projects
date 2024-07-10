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
  

  function loop(i = 28) {
    let j = 0;
    if (j < foods.length) {
      display.value=foods[j];
      i--;
      j++;
    
    } else if (i == foods.length && j < 4 * foods.length) {
      i = 0;
    } else {
      display.value=foods[2];
    }

    setTimeout(loop, 20, i);
  }

  loop();
}

