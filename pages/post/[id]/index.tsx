import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Layout from "../../../components/Layout";
import styled from "styled-components";
import FormPost from "../../../components/Form";
import {
    deleteCurrentPost,
    editCurrentPost,
    fetchCurrentPost,
    UpdateCurrentPost
} from "../../../store/actions/currentPostActions";
import { useRouter } from 'next/router';

const updateCurrentPost = (): JSX.Element => {

    const {title, id, body, comments} = useSelector(state => state.currentPost.post);
    const {loading} = useSelector(state => state.currentPost);
    const router = useRouter();
    const dispatch = useDispatch();
    const Submit = async (e) => {
        e.preventDefault();
        dispatch(UpdateCurrentPost(id, {title, body}))
    };

    const handleChange = ({target}) => {
        dispatch(editCurrentPost(target))
    };

    const handleDeletePost = async (id) => {
         await dispatch(deleteCurrentPost(id));
         await router.push('/')
    };


    return (
        <Layout>
            <Wrapper>
                <h1>Update Post</h1>
                <BynDell onClick={()=>handleDeletePost(id)}>Delete Post</BynDell>
                <FormPost
                    mode={"update"}
                    handleChange={handleChange}
                    title={title}
                    body={body}
                    comments={comments}
                    loading={loading}
                    Submit={Submit}/>
                <h4>Comments:</h4>
                <ol>
                    {comments && !!comments.length && comments.map((comment) => (
                        <Li key={comment.id}>{comment.body}</Li>
                    ))}
                </ol>
            </Wrapper>
        </Layout>
    )
};

updateCurrentPost.getInitialProps = async ({query, reduxStore}: any) => {
    return await reduxStore.dispatch(fetchCurrentPost(query.id));
};

export default updateCurrentPost;

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${props => props.theme.spacing([2, 3])};
`;

const Li = styled.li`
  width: fit-content;
  padding: ${props => props.theme.spacing([0.3])};
  margin: ${props => props.theme.spacing([0.3])};
  border-radius: ${props => props.theme.shapes.borderRadius};
  background-color: ${props => props.theme.palette.text.grey};
`;

const BynDell = styled.button`
  width: fit-content;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.theme.palette.secondary.main};
`;
