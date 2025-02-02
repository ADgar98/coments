import { sanitizeHtml } from "./modules/sanitize.js"
import { fetchRenderComment } from "./modules/fetchRenderAndLike.js"

let input = document.querySelector(".add-form-name")
let textInput = document.querySelector(".add-form-text")
let btn = document.querySelector(".add-form-button")
let addForm = document.querySelector(".add-form")
let loaderForm = document.querySelector(".loaderBox")
let loaderComm = document.querySelector(".loaderComments")

// let counter = 0

// let options = { hour: "2-digit", minute: "2-digit" }
// let optDate = { year: "2-digit", month: "2-digit", day: "2-digit" }

fetchRenderComment()

loaderComm.style.display = "none"

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
    addForm.classList.add("add-form-opacity")
    loaderForm.textContent = "Комментарий добавляется..."
    fetch("https://wedev-api.sky.pro/api/v1/adgar-gajfullin/comments", {
        method: "POST",
        body: JSON.stringify(newLikeArr),
    })
        .then(() => {
            return fetchRenderComment()
        })
        .then(() => {
            textInput.value = ""
            input.value = ""
            addForm.classList.remove("add-form-opacity")
            loaderForm.style.display = "none"
        })
    // likesArr.push(newLikeArr)
})
