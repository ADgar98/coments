import { likesArr } from "./dataArr.js"
import { initLiClick } from "./initFunctiuon.js"
import { initClick } from "./initFunctiuon.js"
export const renderComments = () => {
    let list = document.querySelector(".comments")
    list.innerHTML = likesArr
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

    initClick()
    initLiClick()
}
