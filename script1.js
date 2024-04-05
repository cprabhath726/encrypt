// Function to generate random RGB color
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Function to change text color every second
function changeTextColor() {
  var changingText = document.getElementById("changingText");
  changingText.style.color = getRandomColor();
}

// Call the function every second
setInterval(changeTextColor, 50);
