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
  if (!isNaN(sum)){
    value.innerText = sum;
  }
}

function displayTanner(){
  console.log("tanner applied");
  input.classList.add("tanner");
}

function hideTanner(){
  input.classList.remove("tanner");
}

function keyPressEvent(e){
  console.log(e);
  if (e.ctrlKey) e.preventDefault();
  if (e.code == "Enter" && e.ctrlKey){
    console.log(input.value.toLowerCase().trim());
    if (input.value.toLowerCase().trim() == "tanner") displayTanner();
    else hideTanner();
    showSum();
  }
  if (e.code == "Equal"){
    increaseInputFontSize();
    console.log("equal");
    e.preventDefault();
  }
  if (e.code == "Minus" && e.ctrlKey){
    console.log("minus");
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
  plusIcon.style.color = "white";
  minusIcon.style.color = "white";
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
  plusIcon.style.color = "black";
  minusIcon.style.color = "black";
}

let contrastMode = "light";
const input = document.querySelector(".input");
const value = document.querySelector(".value");


const contrastButton = document.querySelector(".light-dark");
const calculateButton = document.querySelector(".calculate");
const adjustIcon = document.querySelector(".fa-adjust");
const helpIcon = document.querySelector(".fa-question-circle");
const plusIcon = document.querySelector(".fa-plus");
const minusIcon = document.querySelector(".fa-minus");

document.querySelector(".calculate").addEventListener("click", showSum);
document.addEventListener("keypress", keyPressEvent);
adjustIcon.addEventListener("click", switchContrastMode);
plusIcon.addEventListener("click", increaseInputFontSize);
minusIcon.addEventListener("click", decreaseInputFontSize);

loadFromLocalStorage();