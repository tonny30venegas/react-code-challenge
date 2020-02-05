export function setPost(post){
    return {
        type: "SET_POST",
        payload: post
    }
}

export function setComment(comment){
    return {
        type: "SET_COMMENT",
        payload: comment
    }
}

export function addComment(comment){
    return {
        type: "ADD_COMMENT",
        payload: comment
    }
}