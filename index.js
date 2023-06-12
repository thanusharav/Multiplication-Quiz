

const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const b= document.getElementById("input");

const a = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

a.addEventListener("submit", () => {
  const userAns = +b.value;
  if (userAns === correctAns) {
    score++;
    upda();
  } else {
    score--;
    upda();
  }
});

function upda() {
  localStorage.setItem("score", JSON.stringify(score));
}


