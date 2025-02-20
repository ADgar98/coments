import { sanitizeHtml } from "./modules/sanitize.js"
import { fetchRenderComment } from "./modules/fetchRenderAndLike.js"

// let loaderComm = document.querySelector(".loaderComments")
export let token = ""
const authHttp = "https://wedev-api.sky.pro/api/user"

export const setToken = (newToken) => {
    token = newToken
}

export let name = ""
export let setName = (newName) => {
    name = newName
}

// let counter = 0

// let options = { hour: "2-digit", minute: "2-digit" }
// let optDate = { year: "2-digit", month: "2-digit", day: "2-digit" }

fetchRenderComment()

// loaderComm.style.display = "none"

export const addBtn = () => {
    let btn = document.querySelector(".add-form-button")
    let addForm = document.querySelector(".add-form")
    let loaderForm = document.querySelector(".loaderBox")

    btn.addEventListener("click", function () {
        let input = document.querySelector(".add-form-name")
        let textInput = document.querySelector(".add-form-text")
        let newLikeArr = {
            text: sanitizeHtml(textInput.value),
            name: sanitizeHtml(input.value),
        }
        addForm.classList.add("add-form-opacity")
        loaderForm.textContent = "Комментарий добавляется..."
        fetch(" https://wedev-api.sky.pro/api/v2/adgar-gajfullin/comments", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newLikeArr),
        })
            .then((response) => {
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

        //     // likesArr.push(newLikeArr)
    })
}
export const login = (login, password) => {
    return fetch(authHttp + "/login", {
        method: "POST",

        body: JSON.stringify({ login: login, password: password }),
    })
}
export const regestration = (login, password, name) => {
    return fetch(authHttp, {
        method: "POST",

        body: JSON.stringify({ login: login, name: name, password: password }),
    })
}
