let lastX; // Tracks the last observed mouse X position
let isDragging = false; // to prevent drag showing a dot, we need to track that.
let newWidth; // Is the size of the dot.
let bar = document.querySelector("div");
let button = document.getElementById("clearButton");

bar.addEventListener("mousedown", function(event) {
  if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // Prevent selection
  }
});

function moved(event) {
  if (event.buttons == 0) {
    window.removeEventListener("mousemove", moved);
  } else {
    let dist = event.clientX - lastX;
    newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
    isDragging = true;
  }
}

window.addEventListener("mouseup", function() {
  if (isDragging) {
    setTimeout(() = >{
      isDragging = false;
    },
    50);
  }
});

window.addEventListener("click", function(event) {
  if (!isDragging) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dot.style.height = newWidth + "px";
    dot.style.width = newWidth + "px";
    dot.style.borderRadius = (newWidth / 2) + "px";
    /* rounds corners */
    document.body.appendChild(dot);
  }
});

button.addEventListener("click", event = >{
  location.reload();
});
