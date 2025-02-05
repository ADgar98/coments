import { sanitizeHtml } from "./modules/sanitize.js"
import { fetchRenderComment } from "./modules/fetchRenderAndLike.js"

let input = document.querySelector(".add-form-name")
let textInput = document.querySelector(".add-form-text")
let addForm = document.querySelector(".add-form")
let loaderForm = document.querySelector(".loaderBox")

export const handlePostClick = (Arr) => {
    fetch("https://wedev-api.sky.pro/api/v1/adgar-gajfullin/comments", {
        method: "POST",
        body: JSON.stringify(Arr),
    })
        .then((response) => {
            console.log(response.status)

            if (response.status === 400) {
                throw new Error("Введены некоректные данные")
            }
            if (response.status === 500) {
                throw new Error("Проблемы с сервером")
            }

            return response.json()
        })
        .then(() => {
            return fetchRenderComment()
        })
        .then(() => {
            textInput.value = ""
            input.value = ""
        })
        .catch((error) => {
            if (error.message === "Failed to fetch") {
                alert("Ошибка подключения к интернету")
            }
            if (error.message === "Введены некоректные данные") {
                alert(error.message)

                textInput.classList.add("error")
                input.classList.add("error")

                setTimeout(() => {
                    textInput.classList.remove("error")
                    input.classList.remove("error")
                }, 2000)
            } else {
                alert(error.message)
            }
        })
        .finally(() => {
            addForm.classList.remove("add-form-opacity")
            loaderForm.style.display = "none"
        })
}
