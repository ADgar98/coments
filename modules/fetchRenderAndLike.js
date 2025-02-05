import { updateLikesArr } from "./dataArr.js"
import { renderComments } from "./render.js"
export const fetchRenderComment = () => {
    return fetch("https://wedev-api.sky.pro/api/v1/adgar-gajfullin/comments")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateLikesArr(data.comments)
            renderComments()
        })
}

