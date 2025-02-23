import { updateLikesArr } from "./dataArr.js"
import { renderComments } from "./render.js"
export const fetchRenderComment = (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector(".container").innerHTML = `
        <p>Комментарии загружаются</p>`
    }
    fetch("https://wedev-api.sky.pro/api/v2/adgar-gajfullin/comments")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateLikesArr(data.comments)
            renderComments()
        })
}

fetchRenderComment(true)
