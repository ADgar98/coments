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
        if (
            loginEl.value === "" ||
            passwordEl.value === "" ||
            nameEl.value === ""
        ) {
            loginEl.classList.add("error")
            passwordEl.classList.add("error")
            nameEl.classList.add("error")

            setTimeout(() => {
                loginEl.classList.remove("error")
                passwordEl.classList.remove("error")
                nameEl.classList.remove("error")
            }, 2000)
            alert("Заполните поля ввода")
            return false
        }
        if (
            loginEl.value === " " ||
            passwordEl.value === " " ||
            nameEl.value === " "
        ) {
            loginEl.classList.add("error")
            passwordEl.classList.add("error")
            nameEl.classList.add("error")

            setTimeout(() => {
                loginEl.classList.remove("error")
                passwordEl.classList.remove("error")
                nameEl.classList.remove("error")
            }, 2000)
            alert("Заполните поля ввода")
            return false
        }

        regestration(loginEl.value, passwordEl.value, nameEl.value)
            .then((response) => {
                if (response.status === 400) {
                    throw new Error(
                        "Пользователь с таким логином уже сущевствует!",
                    )
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
