import { regestration, setName, setToken } from "../index.js"
import { fetchRenderComment } from "./fetchRenderAndLike.js"
export const renderReg = () => {
    const containerHtml = document.querySelector(".container")

    const regHtml = `
            <div class="add-auth-form comment">
            <h3 class="auth-header"> Форма регестрации</h3>
            <input type="name" class="add-name" placeholder="Введите ваше имя"/>
                <input type="text" class="add-login" placeholder="Введите ваш логин"/>
                <input type="password" class="add-password" placeholder="Введите ваш пароль"/>
                <button id="reg" class="add-btn">Зарегистрироваться</button>
            </div>
    `

    containerHtml.innerHTML = regHtml

    const loginEl = document.querySelector(".add-login")
    const passwordEl = document.querySelector(".add-password")
    const addReg = document.getElementById("reg")
    const nameEl = document.querySelector(".add-name")

    addReg.addEventListener("click", () => {
        regestration(loginEl.value, passwordEl.value, nameEl.value)
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
