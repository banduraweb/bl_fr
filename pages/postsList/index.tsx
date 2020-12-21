import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Layout from "../../components/Layout";
import PostItem from "../../components/PostItem";
import styled from "styled-components";
import {postComment} from "../../store/actions/postsActions";

const PostList = () => {
    const {posts, loading} = useSelector(state => state.posts);

    const dispatch = useDispatch();
    const handleSubmitComment = async (e, postId, body)=>{
        e.preventDefault();
       return await dispatch(postComment({postId, body}));
    };

    return (
        <Layout>
            <Wrapper>
                {posts.map((item, idx) => (
                  <PostItem
                      post={item}
                      idx={idx}
                      key={idx}
                      handleSubmitComment={handleSubmitComment}
                      loading={loading}/>
                ))}
            </Wrapper>
        </Layout>
    )
};


export default PostList;


const Wrapper = styled.section`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${props => props.theme.spacing([2, 3])};
`;









