import {
    ADD_COMMENT_TO_CURRENT_POST,
    CLEAR_ERROR_LOADING_POSTS,
    ERROR_LOADING_POSTS, PostsDispatchTypes,
    SAVE_POSTS,
    START_LOADING,
    STOP_LOADING
} from '../actions/postsActions';
import {PostList} from "../../types/types";


interface InitStateI {
    posts: PostList,
    loading: boolean,
    hasErrors: boolean
}

const initState: InitStateI = {
    posts: null,
    loading: false,
    hasErrors: false
};


const postsReducer = (state: InitStateI = initState , action: PostsDispatchTypes):  InitStateI => {
    switch (action.type) {
        case SAVE_POSTS:
            const {payload} = action;
            return {
                ...state,
                posts: payload
            };

        case START_LOADING:
            return {
                ...state,
                loading: true,
            };

        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            };

        case ERROR_LOADING_POSTS:
            return {
                ...state,
                hasErrors: true,
            };

        case CLEAR_ERROR_LOADING_POSTS:
            return {
                ...state,
                hasErrors: false,
            };
        case ADD_COMMENT_TO_CURRENT_POST:
            const {comment} = action;
            return {
                ...state,
                //@ts-ignore
                posts: state.posts.map(post=>{
                    //@ts-ignore
                    if(post.id === comment.postId) {
                        return {
                            ...post,
                            comments: [...post.comments, comment]
                        }
                    } else {
                        return post
                    }
                })

            };
        default:
            return {...state};
    }
};

export default postsReducer;


