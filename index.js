import { comentLi } from "./modules/render.js";
import { likesArr } from "./modules/dataArr.js";
import { sanitizeHtml } from "./sanitize.js";

let input = document.querySelector(".add-form-name");
let textInput = document.querySelector(".add-form-text");
let btn = document.querySelector(".add-form-button");

let counter = 0;

let options = { hour: "2-digit", minute: "2-digit" };
let optDate = { year: "2-digit", month: "2-digit", day: "2-digit" };

comentLi();

btn.addEventListener("click", function () {
  let newLikeArr = {
    name: sanitizeHtml(input.value),
    coment: sanitizeHtml(textInput.value),
    date:
      new Date().toLocaleDateString("ru-RU", optDate) +
      " " +
      new Date().toLocaleTimeString("ru-RU", options),
    likeNumber: counter,
    like: false,
  };
  likesArr.push(newLikeArr);
  textInput.value = "";
  input.value = "";
  comentLi();
});
