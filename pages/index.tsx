import React from 'react';
import PostList from './postsList/index'
import {fetchPosts} from "../store/actions/postsActions";
function HomePage() {
    return (
        <PostList/>
    )
}

HomePage.getInitialProps = async ({ reduxStore }: any) => {
    return await reduxStore.dispatch(fetchPosts());
};


export default HomePage
