const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var length;

function getLength() {
  var eightchar = document.getElementById("eightchar");
  var ninechar = document.getElementById("ninechar");
  var tenchar = document.getElementById("tenchar");
  var elevenchar = document.getElementById("elevenchar");
  var twelvechar = document.getElementById("twelvechar");

  if (eightchar.checked == true) {
    length = Number(eightchar.value);
    return length;
  } else if (ninechar.checked == true) {
    length = Number(ninechar.value);
    return length;
  } else if (tenchar.checked == true) {
    length = Number(tenchar.value);
    return length;
  } else if (elevenchar.checked == true) {
    length = Number(elevenchar.value);
    return length;
  } else if (twelvechar.checked == true) {
    length = Number(twelvechar.value);
    console.log(length);
  } else console.log("no value selected");
}

function makePass() {
  getLength();
  console.log(length);
}

//document.querySelector("button").addEventListener("click", () => {
// [...document.querySelectorAll('input[type="radio"]')].forEach(
// (input) => (input.checked = false)
//);
//});

document.getElementById("gogo").addEventListener("click", () => {
  makePass();
});
