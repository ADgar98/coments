import { likesArr } from "./dataArr.js"
import { comentLi } from "./render.js"

export const initLiClick = () => {
    let textInput = document.querySelector(".add-form-text")
    const liBoxes = document.querySelectorAll(".comment")

    for (const liBox of liBoxes) {
        textInput.value = ""
        liBox.addEventListener("click", () => {
            const indexLi = liBox.dataset.li
            const userName = likesArr[indexLi]

            textInput.value = `"${userName.coment} ${userName.name}"`
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

            if (commentObj.like) {
                commentObj.likeNumber -= 1
                commentObj.like = false
            } else {
                commentObj.likeNumber += 1
                commentObj.like = true
            }

            comentLi()
        })
    }
}
