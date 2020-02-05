const postReducer = (state = {
    posts: [],
    comments: [],
    newComments: []
}, action) => {
    switch(action.type){
        case "SET_POST": 
            state = {
                ...state,
                posts: action.payload
            }
            break;
        case "SET_COMMENT": 
            state = {
                ...state,
                comments: action.payload
            }
            break;
        case "ADD_COMMENT": 
            state = {
                ...state,
                newComments: [...state.newComments, action.payload],
                comments: [...state.comments, action.payload]
            }
            break;
            default:
            break;
    }
    return state;
}

export default postReducer;