const header = document.querySelector("header");
const footer = document.querySelector("footer");
const pen = document.getElementById("pen");
const eraser = document.getElementById("erase");
const colorPicker = document.getElementById("color-picker");
const colorSubmit = document.getElementById("color-submit");
const penSize = document.getElementById("pen-size");
const sizeBox = document.getElementById("size-box");
const cursor = document.getElementById("cursor");
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
};
//canvas
function resizeFunction() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
}

window.addEventListener("resize", resizeFunction);
resizeFunction();

//app logic
let posX = 0;
let posY = 0;

let isMousePressed = false;

document.addEventListener("mousedown", () => {
  isMousePressed = true;
});
document.addEventListener("mouseup", () => {
  isMousePressed = false;
});

//draw and erase
let color = colorPicker.value;

colorSubmit.addEventListener("click", () => {
  color = colorPicker.value;
});

function action() {
  canvas.addEventListener("mousemove", (e) => {
    posX = e.offsetX;
    posY = e.offsetY;
    if (isMousePressed) {
      ctx.fillStyle = `${color}`;
      ctx.fillRect(posX, posY, `${size}`, `${size}`);
    }
  });
}

action();

pen.addEventListener("click", () => {
  color = colorPicker.value;
  action();
  cursor.innerHTML = pen.innerHTML;
});

eraser.addEventListener("click", () => {
  color = "white";
  action();
  cursor.innerHTML = eraser.innerHTML;
});

//pen-size

let size = penSize.addEventListener("mousemove", () => {
  if (isMousePressed) {
    size = penSize.value;
    sizeBox.style.visibility = "visible"
    sizeBox.innerText = penSize.value;
  }else{
    sizeBox.style.visibility = "hidden"
  }
});

//cursor logic
header.addEventListener("mousemove", () => {
  cursor.style.top = "50%";
  cursor.style.left = "50%";
});

footer.addEventListener("mousemove", () => {
  cursor.style.top = "50%";
  cursor.style.left = "50%";
});

canvas.addEventListener("mousemove", customCursor);

function customCursor(e) {
  cursor.style.display = "block";
  cursor.style.top = e.offsetY + "px";
  cursor.style.left = e.pageX + "px";
}
