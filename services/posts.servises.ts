import apiPosts from '../api/apiPosts';
import {CommentList, PostList, Comment, Post} from "../types/types";



const getAllPosts = ():Promise<PostList> => apiPosts.get('/posts');
const getAllComments = ():Promise<CommentList> => apiPosts.get('/comments');
const postComment = (comment: Comment):Promise<Comment> => apiPosts.post('/comments', comment);
const postPost = (post: Post):Promise<Post> => apiPosts.post('/posts', post);
const deletePost = (id: string):Promise<void> => apiPosts.delete(`/posts/${id}`);
const getCurrentPost = (id: string):Promise<Post> => apiPosts.get(`/posts/${id}?_embed=comments`);
const updateCurrentPost = (id: string, post: Post):Promise<void> => apiPosts.put(`/posts/${id}`, post);


const postsService = {
    getAllPosts,
    getAllComments,
    postComment,
    postPost,
    deletePost,
    getCurrentPost,
    updateCurrentPost
};

export default postsService;
