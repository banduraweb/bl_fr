import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Layout from "../../components/Layout";
import styled from "styled-components";
import {postPost} from "../../store/actions/postsActions";
import FormPost from "../../components/Form";


type GenericObject = { [key: string]: string };

const initFields: GenericObject = {
    title: "",
    body: ""
};

const CreatePost = (): JSX.Element => {
    const [formFields, setFormFields] = useState(initFields);
    const {loading} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const Submit = async (e) => {
        e.preventDefault();
        await dispatch(postPost(formFields));
        await setFormFields(initFields)
    };

    const handleChange = ({target}) => {
        setFormFields(state => ({...state, [target.name]: target.value}))
    };
    return (
        <Layout>
            <Wrapper>
                <h1>Create Post</h1>
                <FormPost
                    mode={"create"}
                    handleChange={handleChange}
                    title={formFields.title}
                    body={formFields.body}
                    loading={loading}
                    Submit={Submit}/>
            </Wrapper>
        </Layout>
    )
};


export default CreatePost;

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: ${props => props.theme.spacing([2, 3])};
`;

