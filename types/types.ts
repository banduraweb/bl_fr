export interface Comment {
    id: string,
    postId: string,
    body: string
}

export type CommentList = {
    comments: Comment[]
}

export interface Post {
    id: string,
    title: string,
    body: string,
    comments: Comment[]
}

export type PostList = {
    posts: Post[]
}




