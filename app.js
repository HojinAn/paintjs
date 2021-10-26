const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "black";
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
//canvas를 element로 만드는 거기 때문에 width, height를 지정해줘야 한다.
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
// fill 실습
// ctx.fillStyle = "green";
// ctx.fillRect(50, 20, 100, 49);

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  // console.log(event); 개발자도구 console에서 확인 해보기
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x, y); 역시 console로 제대로 작동되는지 확인해보기
  if (!painting) {
    ctx.beginPath(); //mouse가 들어설 때부터 path 시작
    ctx.moveTo(x, y); // path를 만든다
    // 아마 클릭할 때 마우스 위치를 알기 위해서 ctx의 위치를 계속 tracking해주는 것 같다.
  } else {
    ctx.lineTo(x, y); //클릭하고 있지 않을 때 만들어진 path로부터 line 만들어지기 시작
    ctx.stroke(); //순간순간 계속 작은 라인을 만드는 것
  } // 이 if else는 마우스가 canvas에서 움직이는 내내 실행된다. start point, ending point가 있는게 아니다.
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
