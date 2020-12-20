
import {Dispatch} from "redux";
import postsService from "../../services/posts.servises";
import {PostList} from "../../types/types";

//Action Types
export const SAVE_POSTS = "SAVE_POSTS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const ERROR_LOADING_POSTS = "ERROR_LOADING_POSTS";
export const CLEAR_ERROR_LOADING_POSTS = "CLEAR_ERROR_LOADING_POSTS";



// interfaces
export interface ISavePost {
    type: typeof SAVE_POSTS,
    payload: PostList
}

export interface IStartPostsLoading {
    type: typeof START_LOADING
}

export interface IStopPostsLoading {
    type: typeof STOP_LOADING
}

export interface  ISetErrorsPostsLoading {
    type: typeof ERROR_LOADING_POSTS
}

export interface IClearErrorsLoading {
    type: typeof CLEAR_ERROR_LOADING_POSTS
}



//Action Creator
export const saveNews = (data): ISavePost => ({
    type: SAVE_POSTS,
    payload: data,
});

export const startNewsLoading = (): IStartPostsLoading => ({
    type: START_LOADING,
});

export const stopNewsLoading = (): IStopPostsLoading => ({
    type: STOP_LOADING,
});

export const setErrorNewsLoading = (): ISetErrorsPostsLoading => ({
    type: ERROR_LOADING_POSTS,
});

export const clearErrorNewsLoading = (): IClearErrorsLoading => ({
    type: CLEAR_ERROR_LOADING_POSTS,
});



export type PostsDispatchTypes = ISavePost | IStartPostsLoading | IStopPostsLoading | ISetErrorsPostsLoading | IClearErrorsLoading

export const fetchPosts = () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        let withComments = [];
        dispatch(startNewsLoading());
        const [posts, comments] = await Promise.all([postsService.getAllPosts(), postsService.getAllComments()]);
        if (posts instanceof Array && comments instanceof Array) {
            withComments = posts.map(post=>({
                ...post,
                comments: comments.filter(comment=>comment.postId === post.id)
            }));
        }
        dispatch(stopNewsLoading());
        return dispatch(saveNews(withComments));
    } catch (e) {
        dispatch(stopNewsLoading());
        dispatch(setErrorNewsLoading())
    } finally {
        dispatch(stopNewsLoading());
        dispatch(setErrorNewsLoading())
    }
};

