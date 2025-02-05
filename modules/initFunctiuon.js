import { likesArr } from "./dataArr.js"
import { renderComments } from "./render.js"

function delay(interval = 300) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, interval)
    })
}

export const initLiClick = () => {
    let textInput = document.querySelector(".add-form-text")
    const liBoxes = document.querySelectorAll(".comment")

    for (const liBox of liBoxes) {
        // textInput.value = ""
        liBox.addEventListener("click", () => {
            const indexLi = liBox.dataset.li
            const userName = likesArr[indexLi]
            textInput.value = `"${userName.text} ${userName.author.name}"`
        })
    }
}

export const initClick = () => {
    const btns = document.querySelectorAll(".like-button")

    for (const btn of btns) {
        btn.addEventListener("click", () => {
            const indexLike = btn.dataset.num
            event.stopPropagation()
            const commentObj = likesArr[indexLike]
            btn.classList.add("-loading-like")

            delay(2000).then(() => {
                if (commentObj.likes) {
                    commentObj.likes -= 1
                    commentObj.isLiked = false
                } else {
                    commentObj.likes += 1
                    commentObj.isLiked = true
                }

                renderComments()
            })
        })
    }
}
