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
        login(loginEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setToken(data.user.token)
                setName(data.user.name)
                fetchRenderComment()
            })
    })
}
