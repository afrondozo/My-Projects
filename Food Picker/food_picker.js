const display = document.getElementById("result");

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
  // display.innerHTML=foods[2];

  function loop(i = 0) {
    
    if (i < foods.length) {
      display.innerHTML=foods[i];
      i++;
    
    } else {
      i = 0;;
    }

    setTimeout(loop, 20, i);
  }

  loop();
}

