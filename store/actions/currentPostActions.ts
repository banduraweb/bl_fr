
import {Dispatch} from "redux";
import postsService from "../../services/posts.servises";
import Notification from '../../services/notifier.service'
import {Post} from "../../types/types";

//Action Types

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const ERROR_LOADING_POST = "ERROR_LOADING_POST";
export const CLEAR_ERROR_LOADING_POST = "CLEAR_ERROR_LOADING_POST";
export const SAVE_CURRENT_POST = "SAVE_CURRENT_POST";
export const EDIT_CURRENT_POST_DATA = "EDIT_CURRENT_POST_DATA";


// interfaces

export interface IStartPostLoading {
    type: typeof START_LOADING
}

export interface IStopPostLoading {
    type: typeof STOP_LOADING
}

export interface  ISetErrorsPostLoading {
    type: typeof ERROR_LOADING_POST
}

export interface IClearErrorsLoading {
    type: typeof CLEAR_ERROR_LOADING_POST
}

export interface ISaveCurrentPost {
    type: typeof SAVE_CURRENT_POST,
    post: Post
}

export interface IEditCurrentPost {
    type: typeof EDIT_CURRENT_POST_DATA,
    target
}



//Action Creator
export const saveCurrentPost = (data: Post): ISaveCurrentPost => ({
    type: SAVE_CURRENT_POST,
    post: data,
});

export const startLoading = (): IStartPostLoading => ({
    type: START_LOADING,
});

export const stopLoading = (): IStopPostLoading => ({
    type: STOP_LOADING,
});

export const setErrorLoading = (): ISetErrorsPostLoading => ({
    type: ERROR_LOADING_POST,
});

export const clearErrorLoading = (): IClearErrorsLoading => ({
    type: CLEAR_ERROR_LOADING_POST,
});

export const editCurrentPost = (target: HTMLElement): IEditCurrentPost => ({
    type: EDIT_CURRENT_POST_DATA,
    target,
});




export type currentPostDispatchTypes = ISaveCurrentPost | IStartPostLoading | IStopPostLoading | ISetErrorsPostLoading | IClearErrorsLoading | IEditCurrentPost


export const fetchCurrentPost = (id: string) => async (dispatch: Dispatch<currentPostDispatchTypes>) => {
    try {
        dispatch(clearErrorLoading());
        dispatch(startLoading());
        const response = await postsService.getCurrentPost(id);
        dispatch(stopLoading());
        return  dispatch(saveCurrentPost(response));

    } catch (e) {
        dispatch(stopLoading());
        dispatch(setErrorLoading())
    } finally {
        dispatch(stopLoading());
        dispatch(setErrorLoading())
    }
};

export const UpdateCurrentPost = (id: string, body: Post) => async (dispatch: Dispatch<currentPostDispatchTypes>) => {
    try {
        dispatch(clearErrorLoading());
        dispatch(startLoading());
        const response = await postsService.updateCurrentPost(id, body);
        dispatch(stopLoading());
        Notification.success();
        return  response

    } catch (e) {
        dispatch(stopLoading());
        dispatch(setErrorLoading());
        Notification.error();
    } finally {
        dispatch(stopLoading());
        dispatch(setErrorLoading());
    }
};

export const deleteCurrentPost = (id: string) => async (dispatch: Dispatch<currentPostDispatchTypes>) => {
    try {
        dispatch(clearErrorLoading());
        dispatch(startLoading());
        const response = await postsService.deletePost(id);
        dispatch(stopLoading());
        Notification.success();
        return  response

    } catch (e) {
        dispatch(stopLoading());
        dispatch(setErrorLoading());
        Notification.error();
    } finally {
        dispatch(stopLoading());
        dispatch(setErrorLoading());
    }
};

