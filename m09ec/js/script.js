// Select the sections by their IDs or classes
  const object1 = document.getElementById('object1');
  const object2 = document.getElementById('object2');
  const object3 = document.getElementById('object3');
  const object4 = document.getElementById('object4');
  const object5 = document.getElementById('object5');

  // Add event listeners for clicks
  object1.addEventListener('click', function() {
    alert('Gun clicked!');
  });

  object2.addEventListener('click', function() {
    alert('Marble clicked!');
  });

  object3.addEventListener('click', function() {
    alert('Pig clicked!');
  });

  object4.addEventListener('click', function() {
    alert('Flower clicked!');
  });

  object5.addEventListener('click', function() {
    alert('Train clicked!');
  });
