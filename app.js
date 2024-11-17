const startBtn = document.querySelector(".button");
const options = document.querySelectorAll(".options option");
const submitBtn = document.querySelector(".submit-btn button");
const submitBtn2 = document.querySelector(".submit-btn2 button");
const submitBtn3 = document.querySelector(".submit-btn3 button");
const finalSubmitBtn = document.querySelector(".final-button");

let score = 0;
const updateScore = () => {
  score += 20;
};
let count = 75;
const startTimer = () => {
  document.querySelector("#visible").removeAttribute("id", "visible");
  setInterval(() => {
    if (count >= 0) {
      let ele = document.querySelector(".time");
      let str = count.toString();
      ele.innerText = "Time: " + str;
      count--;
    }
  }, 1000);
};

const showAnotherPage = () => {
  //remove the current page content
  document.querySelector(".title").setAttribute("id", "hide");
  document.querySelector(".content").setAttribute("id", "hide");
  document.querySelector(".start-button").setAttribute("id", "hide");

  //add the another page content
  document.querySelector(".quiz-container").removeAttribute("id", "hide");
  //Start timer
  startTimer();
};

const showThirdPage = () => {
  //remove the current page
  document.querySelector(".quiz-container").setAttribute("id", "hide");

  //show third page
  document.querySelector(".quiz-container2").removeAttribute("id", "hide");
  let ele = document.querySelector(".options #selected");
  let answer = document.querySelector(".options").firstElementChild.innerText;
  if (ele.innerText === answer) {
    document.querySelector(".check").innerText = "Correct!";
    updateScore();
  } else {
    document.querySelector(".check").style.color = "red";
    document.querySelector(".check").innerText = "Incorrect!";
  }

  //show if answer is corrent or not
  document.querySelector(".footer").removeAttribute("id", "hide");
  setInterval(() => {
    document.querySelector(".footer").setAttribute("id", "hide");
  }, 3000);

  submitBtn2.addEventListener("click", showFourthPage);
};

const showFourthPage = () => {
  //remove the current page
  document.querySelector(".quiz-container2").setAttribute("id", "hide");

  //show fourth page
  document.querySelector(".quiz-container3").removeAttribute("id", "hide");
  let ele = document.querySelector(".options #selected");
  if (ele.innerText === "b. Web Development") {
    document.querySelector(".check").style.color = "green";
    document.querySelector(".check").innerText = "Correct!";
    updateScore();
  } else {
    document.querySelector(".check").style.color = "red";
    document.querySelector(".check").innerText = "Incorrect!";
  }

  //show if answer is corrent or not
  document.querySelector(".footer").removeAttribute("id", "hide");
  setInterval(() => {
    document.querySelector(".footer").setAttribute("id", "hide");
  }, 3000);

  submitBtn3.addEventListener("click", showFifthPage);
};

const showFifthPage = () => {
  //remove the current page
  document.querySelector(".quiz-container3").setAttribute("id", "hide");

  //show fifth page
  document.querySelector(".final-page").removeAttribute("id", "hide");
  let ele = document.querySelector(".options #selected");
  if (ele.innerText === "b. function myFunction() {}") {
    document.querySelector(".check").style.color = "green";
    document.querySelector(".check").innerText = "Correct!";
    updateScore();
  } else {
    document.querySelector(".check").style.color = "red";
    document.querySelector(".check").innerText = "Incorrect!";
  }

  //show final score
  let finalScore = score.toLocaleString();
  let text = (document.querySelector(".final-score").innerText += finalScore);

  //show if answer is corrent or not
  document.querySelector(".footer").removeAttribute("id", "hide");
  setInterval(() => {
    document.querySelector(".footer").setAttribute("id", "hide");
  }, 3000);

  document.querySelector(".timer").setAttribute("id", "hide");
  

};

const changeOptionColor = (e) => {
  options.forEach((option) => {
    if (option.id === "selected") {
      option.id = "";
    }
  });
  e.target.setAttribute("id", "selected");
  submitBtn.addEventListener("click", showThirdPage);
};
startBtn.addEventListener("click", showAnotherPage);
options.forEach((option) => {
  option.addEventListener("click", changeOptionColor);
});
