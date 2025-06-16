//import "bootstrap";
import "./style.css";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
window.onload = function() {
  //write your code here
  let num1 = Math.floor(Math.random() * who.length);
  let num2 = Math.floor(Math.random() * action.length);
  let num3 = Math.floor(Math.random() * what.length);
  let num4 = Math.floor(Math.random() * when.length);


  document.getElementById("excuse").innerHTML = who[num1]+" "+action[num2]+" "+what[num3]+" "+when[num4];
  console.log("Hello");
};
