import { renderComments } from "./modules/render.js"
import { likesArr, updateLikesArr } from "./modules/dataArr.js"
import { sanitizeHtml } from "./modules/sanitize.js"

let input = document.querySelector(".add-form-name")
let textInput = document.querySelector(".add-form-text")
let btn = document.querySelector(".add-form-button")

let counter = 0

let options = { hour: "2-digit", minute: "2-digit" }
let optDate = { year: "2-digit", month: "2-digit", day: "2-digit" }

fetch("https://wedev-api.sky.pro/api/v1/adgar-gajfullin/comments")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        updateLikesArr(data.comments)
        renderComments()
    })

btn.addEventListener("click", function () {
    let newLikeArr = {
        // date:
        //     new Date().toLocaleDateString("ru-RU", optDate) +
        //     " " +
        //     new Date().toLocaleTimeString("ru-RU", options),
        // likes: counter,
        // isLiked: false,
        text: sanitizeHtml(textInput.value),
        name: sanitizeHtml(input.value),
    }
    fetch("https://wedev-api.sky.pro/api/v1/adgar-gajfullin/comments", {
        method: "POST",
        body: JSON.stringify(newLikeArr),
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            updateLikesArr(data.comments)
            renderComments()
        })

    // likesArr.push(newLikeArr)
    textInput.value = ""
    input.value = ""
    renderComments()
})
