import apiPosts from '../api/apiPosts';
import {CommentList, PostList} from "../types/types";


const getAllPosts = ():Promise<PostList> => apiPosts.get('/posts');
const getAllComments = ():Promise<CommentList> => apiPosts.get('/comments');


const postsService = {
    getAllPosts,
    getAllComments
};

export default postsService;
