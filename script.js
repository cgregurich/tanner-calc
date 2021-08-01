function loadFromLocalStorage(){
  input.style.fontSize = localStorage.getItem("fontSize");
  value.style.fontSize = localStorage.getItem("fontSize");
  contrastMode = localStorage.getItem("contrastMode");
  setContrastMode();
}

function saveFontSize(){
  localStorage.setItem("fontSize", input.style.fontSize);
}

function saveContrastMode(){
  localStorage.setItem("contrastMode", contrastMode);
}

function showSum(){
  const values = input.value.split("\n");
  const sum = values.reduce((sum, val) => parseInt(sum)+parseInt(val));
  console.log(sum);
  if (!isNaN(sum)){
    value.innerText = sum;
  }
}

function keyPressEvent(e){
  if (e.code == "Enter" && e.ctrlKey){
    showSum();
  }
  if (e.code == "Equal"){
    e.preventDefault();
    increaseInputFontSize();
  }
  if (e.code == "Minus"){
    e.preventDefault();
    decreaseInputFontSize();
  }
}

function increaseInputFontSize(){
  if (input.style.fontSize == ""){
    input.style.fontSize = "16px";
    value.style.fontSize = "16px";
  }
  input.style.fontSize = `${parseInt(input.style.fontSize) + 1}px`;
  value.style.fontSize = `${parseInt(input.style.fontSize) + 1}px`;
  saveFontSize();
}

function decreaseInputFontSize(){
  if (input.style.fontSize == ""){
    input.style.fontSize = "16px";
    value.style.fontSize = "16px";
  }
  input.style.fontSize = `${parseInt(input.style.fontSize) - 1}px`;
  value.style.fontSize = `${parseInt(input.style.fontSize) - 1}px`;
  saveFontSize();
}

function switchContrastMode(){
  contrastMode = contrastMode == "dark" ? "light" : "dark";
  setContrastMode();
  saveContrastMode();

}

function setContrastMode(){
  if (contrastMode == "dark"){
    enableDarkMode();
  }
  else {
    enableLightMode();
  }
}

function enableDarkMode(){
  document.body.style.backgroundColor = "black";
  value.classList.remove("light");
  value.classList.add("dark");
  input.classList.remove("light");
  input.classList.add("dark");
  calculateButton.classList.remove("light");
  calculateButton.classList.add("dark");
  adjustIcon.style.color = "white";
  helpIcon.style.color = "white";  
}

function enableLightMode(){
  document.body.style.backgroundColor = "white";
  value.classList.remove("dark");
  value.classList.add("light");
  input.classList.remove("dark");
  input.classList.add("light");
  calculateButton.classList.remove("dark");
  calculateButton.classList.add("light");
  adjustIcon.style.color = "black";
  helpIcon.style.color = "black";
}

let contrastMode = "light";
const input = document.querySelector(".input");
const value = document.querySelector(".value");


const contrastButton = document.querySelector(".light-dark");
const calculateButton = document.querySelector(".calculate");
const adjustIcon = document.querySelector(".fa-adjust");
const helpIcon = document.querySelector(".fa-question-circle");

document.querySelector(".calculate").addEventListener("click", showSum);
document.addEventListener("keypress", keyPressEvent);
adjustIcon.addEventListener("click", switchContrastMode);

loadFromLocalStorage();