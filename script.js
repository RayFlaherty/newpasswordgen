// const upperCase = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var passLength, chars, password;

function getLength() {
  var eightchar = document.getElementById("eightchar");
  var ninechar = document.getElementById("ninechar");
  var tenchar = document.getElementById("tenchar");
  var elevenchar = document.getElementById("elevenchar");
  var twelvechar = document.getElementById("twelvechar");

  if (eightchar.checked == true) {
    passLength = Number(eightchar.value);
    return passLength;
  } else if (ninechar.checked == true) {
    passLength = Number(ninechar.value);
    return passLength;
  } else if (tenchar.checked == true) {
    passLength = Number(tenchar.value);
    return passLength;
  } else if (elevenchar.checked == true) {
    passLength = Number(elevenchar.value);
    return passLength;
  } else if (twelvechar.checked == true) {
    passLength = Number(twelvechar.value);
    console.log(passLength);
    return passLength;
  } else console.log("no value selected");
}

function getChars() {
  passLength = getLength();
  const uCase = document.getElementById("upperCase").checked;
  const lCase = document.getElementById("lowerCase").checked;
  const nums = document.getElementById("numbers").checked;
  const symb = document.getElementById("symbols").checked;
  password = generatePass(uCase, lCase, nums, symb);

  function generatePass(lCase, uCase, nums, symb) {
    let chars = "";
    if (lCase) chars = chars.concat(lowerCase);
    if (uCase) chars = chars.concat(upperCase);
    if (nums) chars = chars.concat(numbers);
    if (symb) chars = chars.concat(symbols);

    const passChars = [];
    for (let i = 0; i < passLength; i++) {
      const characters = chars[Math.floor(Math.random() * chars.length)];
      passChars.push(String(characters));
    }
    console.log(passChars);
  }
}

//document.querySelector("button").addEventListener("click", () => {
// [...document.querySelectorAll('input[type="radio"]')].forEach(
// (input) => (input.checked = false)
//);
//});

document.getElementById("gogo").addEventListener("click", () => {
  //makePass()
  getChars();
});
