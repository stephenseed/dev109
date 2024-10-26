var table = prompt("Which multiplication table would you like to see?"); // Unit of Table
var msg = '<h2>Multiplication Table</h2>';              // Message
var i = 1;                 // Set counter to 1
while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
