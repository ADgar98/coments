import { likesArr } from "./dataArr.js"
import { initLiClick } from "./initFunctiuon.js"
import { initClick } from "./initFunctiuon.js"
import { renderAuth } from "./renderAuth.js"
import { addBtn, name, token } from "../index.js"
import { renderReg } from "./renderReg.js"

export const renderComments = () => {
    let container = document.querySelector(".container")
    const commentsHtml = likesArr
        .map((like, index) => {
            let renderDate = new Date(like.date)

            renderDate = renderDate
                .toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })
                .replace(/[\s,]/g, " ")

            return `<li class="comment" data-Li="${index}"><div class="comment-header">
          <div>${like.author.name}</div>
          <div>${renderDate}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${like.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter" >${like.likes}</span>
            <button class="like-button ${like.isLiked ? "-active-like" : ""}" data-num="${index}"></button>
          </div>
        </div>
      </li>`
        })
        .join("")

    const addCommentsHtml = `
            <div class="loaderBox"></div>
            <div class="add-form">
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                    readonly
                    value="${name}"
                />
                <textarea
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш коментарий"
                    rows="4"
                ></textarea>
                <div class="add-form-row">
                    <button class="add-form-button">Написать</button>
                </div>
            </div>`

    const linkAut = `<p> Авторизуйтесь чтобы оставить комментарий </p>`

    const baseHtml = `<ul class="comments">${commentsHtml}</ul>
    ${token ? addCommentsHtml : linkAut}`

    container.innerHTML = baseHtml

    if (token) {
        addBtn()
    }

    document.querySelector(".buttonAuth").addEventListener("click", () => {
        renderAuth()
    })
    document.querySelector(".buttonReg").addEventListener("click", () => {
        renderReg()
    })

    if (token) {
        initClick()
        initLiClick()
    }
}
