const $container = $("#container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 480;

for (let i = 0; i < SQUARES; i++) {
  const $square = $("<div></div>").addClass("square");

  $square.on("mouseover", () => setColor($square));
  $square.on("mouseout", () => removeColor($square));

  $container.append($square);
}

function setColor($element) {
  const color = getRandomColor();
  $element.addClass("active").css({
    background: color,
    boxShadow: `0 0 5px ${color}, 0 0 15px ${color}`,
  });
}

function removeColor($element) {
  setTimeout(() => {
    $element.css({
      background: "#1d1d1d",
      boxShadow: "0 0 2px #000",
    });
  }, 100);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
