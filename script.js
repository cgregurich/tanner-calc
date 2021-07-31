function getData(){
  const values = input.value.split("\n");
  const sum = values.reduce((sum, val) => parseInt(sum)+parseInt(val));
  console.log(sum);
  value.innerText = sum;
}

const input = document.querySelector(".input");
const value = document.querySelector(".value");
document.querySelector(".calculate").addEventListener("click", getData);
