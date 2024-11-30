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

function checkGameOver() {
  let gameOver = true;
  for (let i = 1; i <= 5; i++) {
    var listItem = document.getElementById('li' + i);
    if (!listItem.classList.contains('strikethrough')) {
      gameOver = false;
      break;
    }
  }
  if (gameOver) {
    alert("Game Over");
    const restart = confirm("Do you want to start over?");
    if (restart) {
      location.reload(); // Reset the game if the user wants to start over
    }
  }
}

object1.addEventListener('click',
function() {
  li1.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
  setTimeout(checkGameOver, 500);
});

object2.addEventListener('click',
function() {
  li2.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
  setTimeout(checkGameOver, 500);
});

object3.addEventListener('click',
function() {
  li3.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
  setTimeout(checkGameOver, 500);
});

object4.addEventListener('click',
function() {
  li4.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
  setTimeout(checkGameOver, 500);
});

object5.addEventListener('click',
function() {
  li5.classList.add('strikethrough'); // Add strikethrough to the corresponding list item
  setTimeout(checkGameOver, 500);
});
