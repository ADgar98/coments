import { login, setName, setToken } from "../index.js"
import { fetchRenderComment } from "./fetchRenderAndLike.js"
export const renderAuth = () => {
    // const btnAuth = document.querySelector(".buttonAuth")
    const containerHtml = document.querySelector(".container")

    const loginHtml = `
            <div class="add-auth-form comment">
            <h3 class="auth-header"> Форма входа</h3>
                <input type="text" class="add-login" placeholder="Введите ваш логин"/>
                <input type="password" class="add-password" placeholder="Введите ваш пароль"/>
                <button id="submit" class="add-btn" >Войти</button>
            </div>
    `

    containerHtml.innerHTML = loginHtml

    const loginEl = document.querySelector(".add-login")
    const passwordEl = document.querySelector(".add-password")
    const addAuth = document.getElementById("submit")

    addAuth.addEventListener("click", () => {
        if (loginEl.value === "" || passwordEl.value === "") {
            loginEl.classList.add("error")
            passwordEl.classList.add("error")

            setTimeout(() => {
                loginEl.classList.remove("error")
                passwordEl.classList.remove("error")
            }, 2000)
            alert("Заполните поля ввода")
            return false
        }
        if (loginEl.value === " " || passwordEl.value === " ") {
            loginEl.classList.add("error")
            passwordEl.classList.add("error")

            setTimeout(() => {
                loginEl.classList.remove("error")
                passwordEl.classList.remove("error")
            }, 2000)
            alert("Заполните поля ввода")
            return false
        }
        login(loginEl.value, passwordEl.value)
            .then((response) => {
                if (response.status === 400) {
                    throw new Error("Введены неправильные логин или пароль")
                }
                if (response.status === 500) {
                    throw new Error("Проблемы с сервером")
                }

                return response.json()
            })
            .then((data) => {
                setToken(data.user.token)
                setName(data.user.name)
                fetchRenderComment()
            })
            .catch((error) => {
                alert(error.message)
            })
    })
}
