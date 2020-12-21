
import {Dispatch} from "redux";
import postsService from "../../services/posts.servises";
import {PostList} from "../../types/types";
import Notification from "../../services/notifier.service";

//Action Types
export const SAVE_POSTS = "SAVE_POSTS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const ERROR_LOADING_POSTS = "ERROR_LOADING_POSTS";
export const CLEAR_ERROR_LOADING_POSTS = "CLEAR_ERROR_LOADING_POSTS";
export const ADD_COMMENT_TO_CURRENT_POST = "ADD_COMMENT_TO_CURRENT_POST";


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

export interface IAddCommentToCurrentPost {
    type: typeof ADD_COMMENT_TO_CURRENT_POST
    comment: Comment
}


//Action Creator
export const savePosts = (data): ISavePost => ({
    type: SAVE_POSTS,
    payload: data,
});

export const startLoading = (): IStartPostsLoading => ({
    type: START_LOADING,
});

export const stopLoading = (): IStopPostsLoading => ({
    type: STOP_LOADING,
});

export const setErrorLoading = (): ISetErrorsPostsLoading => ({
    type: ERROR_LOADING_POSTS,
});

export const clearErrorLoading = (): IClearErrorsLoading => ({
    type: CLEAR_ERROR_LOADING_POSTS,
});

export const addCommentToCurrentPost = (comment): IAddCommentToCurrentPost => ({
    type: ADD_COMMENT_TO_CURRENT_POST,
    comment,
});



export type PostsDispatchTypes = ISavePost | IStartPostsLoading | IStopPostsLoading | ISetErrorsPostsLoading | IClearErrorsLoading | IAddCommentToCurrentPost

export const fetchPosts = () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        let withComments = [];
        dispatch(clearErrorLoading());
        dispatch(startLoading());
        const [posts, comments] = await Promise.all([postsService.getAllPosts(), postsService.getAllComments()]);
        if (posts instanceof Array && comments instanceof Array) {
            withComments = posts.map(post=>({
                ...post,
                comments: comments.filter(comment=>comment.postId === post.id)
            }));
        }
        dispatch(stopLoading());
        return dispatch(savePosts(withComments));
    } catch (e) {
        dispatch(stopLoading());
        dispatch(setErrorLoading())
    } finally {
        dispatch(stopLoading());
        dispatch(setErrorLoading())
    }
};

export const postComment = (comment) => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch(clearErrorLoading());
        dispatch(startLoading());
        const response = await postsService.postComment(comment);
        dispatch(addCommentToCurrentPost(response));
        dispatch(stopLoading());

        return response
    } catch (e) {
        dispatch(stopLoading());
        dispatch(setErrorLoading());
        Notification.error();
    } finally {
        dispatch(stopLoading());
        dispatch(setErrorLoading())
    }
};

export const postPost = (post) => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch(clearErrorLoading());
        dispatch(startLoading());
        const response = await postsService.postPost(post);
        dispatch(stopLoading());
        Notification.success();
        return response
    } catch (e) {
        dispatch(stopLoading());
        dispatch(setErrorLoading());
        Notification.error();
    } finally {
        dispatch(stopLoading());
        dispatch(setErrorLoading())
    }
};


