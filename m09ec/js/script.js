// Select the sections by their IDs or classes
  const object1 = document.getElementById('object1');
  const object2 = document.getElementById('object2');
  const object3 = document.getElementById('object3');
  const object4 = document.getElementById('object4');
  const object5 = document.getElementById('object5');

  const li1 = document.getElementById('li1');
  const li2 = document.getElementById('li2');
  const li3 = document.getElementById('li3');
  const li4 = document.getElementById('li4');
  const li5 = document.getElementById('li5');

  // Add event listeners for clicks

    
  object1.addEventListener('click', function() {
    li1.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
        var gameOver = true;
    for (var i = 1; i <= 5; i++) {  // Loop through li1 to li5
      var listItem = document.getElementById('li' + i); // Get the actual DOM element
      if (listItem.classList.contains('strikethrough')) {
        // If strikethrough is applied, continue checking other items
      } else {
        gameOver = false; // If any item doesn't have strikethrough, set gameOver to false
      }
    }
  });

  object2.addEventListener('click', function() {
    li2.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
        var gameOver = true;
    for (var i = 1; i <= 5; i++) {  // Loop through li1 to li5
      var listItem = document.getElementById('li' + i); // Get the actual DOM element
      if (listItem.classList.contains('strikethrough')) {
        // If strikethrough is applied, continue checking other items
      } else {
        gameOver = false; // If any item doesn't have strikethrough, set gameOver to false
      }
    }
  });

  object3.addEventListener('click', function() {
    li3.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
        var gameOver = true;
    for (var i = 1; i <= 5; i++) {  // Loop through li1 to li5
      var listItem = document.getElementById('li' + i); // Get the actual DOM element
      if (listItem.classList.contains('strikethrough')) {
        // If strikethrough is applied, continue checking other items
      } else {
        gameOver = false; // If any item doesn't have strikethrough, set gameOver to false
      }
    }
  });

  object4.addEventListener('click', function() {
    li4.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
        var gameOver = true;
    alert('Is the game over (1) : ' + gameOver);
    
    for (var i = 1; i <= 5; i++) {  // Loop through li1 to li5
      var listItem = document.getElementById('li' + i); // Get the actual DOM element
      if (listItem.classList.contains('strikethrough')) {
        // If strikethrough is applied, continue checking other items
      } else {
        gameOver = false; // If any item doesn't have strikethrough, set gameOver to false
      }
    }
  });

  object5.addEventListener('click', function() {
    li5.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
        var gameOver = true;
    for (var i = 1; i <= 5; i++) {  // Loop through li1 to li5
      var listItem = document.getElementById('li' + i); // Get the actual DOM element
      if (listItem.classList.contains('strikethrough')) {
        // If strikethrough is applied, continue checking other items
      } else {
        gameOver = false; // If any item doesn't have strikethrough, set gameOver to false
      }
    }
  });



