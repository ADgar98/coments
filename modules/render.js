import { likesArr } from "./dataArr.js"
import { initLiClick } from "./initFunctiuon.js"
import { initClick } from "./initFunctiuon.js"
export const comentLi = () => {
    let list = document.querySelector(".comments")
    list.innerHTML = likesArr
        .map((like, index) => {
            return `<li class="comment" data-Li="${index}"><div class="comment-header">
          <div>${like.name}</div>
          <div>${like.date}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${like.coment}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter" >${like.likeNumber}</span>
            <button class="like-button ${like.like ? "-active-like" : ""}" data-num="${index}"></button>
          </div>
        </div>
      </li>`
        })
        .join("")

    initClick()
    initLiClick()
}
