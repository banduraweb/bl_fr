import React from 'react'
import {useSelector} from 'react-redux'
import Layout from "../../components/Layout";
import PostItem from "../../components/PostItem";
import styled from "styled-components";

const PostList = () => {
    const {posts} = useSelector(state => state.posts);
    // console.log(posts);

    return (
        <Layout>
            <Wrapper>
                {posts.map((item, idx) => (
                  <PostItem post={item} idx={idx} key={idx}/>
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









