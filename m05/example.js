var table = prompt("Which multiplication table would you like to see?"); // Unit of Table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message


  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
