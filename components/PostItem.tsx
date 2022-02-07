import React, { useState} from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Link from 'next/link';
import styled from "styled-components";
import {Post} from "../types/types";
import {doTags} from "../helpers";
import Parser from 'html-react-parser';


type Props = {
    post: Post,
    idx: number,
    handleSubmitComment: (e, postId: string, body: string)=>void,
    loading: boolean
}

const PostItem = (props: Props): JSX.Element => {
    const {post, handleSubmitComment, loading} = props;

    const initIdentity = doTags(post.body, 2);
    // @ts-ignore
    const selectOptions: number[] = [...new Set(Object.entries(initIdentity).map(elem => {
        const [, count] = elem;
        return count
    }))].sort((a, b) => a - b);


    const [identity, setIdentity] = useState(selectOptions[selectOptions.length-1]);
    const [comment, setComment] = useState("");
    const [showComments, setShowComments] = useState(false);
    const handleChange = (e)=>{
        setComment(e.target.value)
    };

    const Submit = async (e, postId, comment)=>{
       await handleSubmitComment(e, postId, comment);
       await setComment("")
    };

    return (
        <SinglePost key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
                <a>Edit Post</a>
            </Link>

            <h4>{post.title && post.title.toUpperCase()}</h4>
            {!!selectOptions.length && (
                <KeyWords>
                    <h6>Key words</h6>
                    <Select name="select" onChange={(e) => setIdentity(+e.target.value)}>
                        {selectOptions.map(option => (

                            <option key={option} value={option} selected={Math.max(...selectOptions) === option}>identity more then {option - 1} </option>
                        ))}
                    </Select>
                </KeyWords>
            )}
            <TagContainer>
                {
                    Object.keys(doTags(post.body, +identity))
                        .map((tag, i) =>
                            (<Tag key={i}>{tag}</Tag>))
                }
            </TagContainer>
            {/*<PostBody> { Parser(post.body || "") }</PostBody>*/}
            <PostBody> { Parser(post.body || "") }</PostBody>
            <Comments>
                <H4>Comments:
                    <ShowHideBtn
                        onClick={()=>setShowComments(!showComments)}>
                        {showComments ? <HighlightOffIcon htmlColor="#FF7961"/> : <AddCircleOutlineIcon htmlColor="#757CE8"/>}
                    </ShowHideBtn>
                </H4>
                {showComments && (
                    <>
                        {!!post.comments.length ? post.comments.map((comment) => (
                                <SingleComment key={comment.id}>
                                    {comment.body}
                                </SingleComment>
                            ))
                            :
                            <span>No comment yet...</span>
                        }
                    </>
                )}

            </Comments>
            {showComments && (
                <TextAreaContainer>
                    <H4>comment: </H4>
                    <form onSubmit={(e)=>{Submit(e, post.id, comment)}}>
                        <Textarea name="comment" onChange={handleChange} value={comment}>

                        </Textarea>
                        <button type="submit" disabled={loading || !comment.length}>Sent</button>
                    </form>
                </TextAreaContainer>
            )}

        </SinglePost>
    )
};

const SinglePost = styled.div`
  box-shadow: ${props => props.theme.shadows[1]};
  margin: ${props => props.theme.spacing([1])};
  padding: ${props => props.theme.spacing([2, 2])};
`;

const PostBody = styled.div`
 vertical-align: top;
  column-count: 2;
  @media (max-width: 768px) {
    column-count: 1;
  }
`;

const TagContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: flex-start;
`;

const KeyWords = styled.div`
 display: flex;
 flex-wrap: nowrap;
 justify-content: flex-start;
 align-items: center;
`;

const Select = styled.select`
 margin: ${props => props.theme.spacing([0, 0.5])};
`;

const Tag = styled.div`
 border-radius: ${props => props.theme.shapes.borderRadius};
 background-color: ${props => props.theme.palette.secondary.light};
 margin: ${props => props.theme.spacing([0.5])};
 padding: ${props => props.theme.spacing([0, 0.5])};
`;

const Comments = styled.div`
 display: flex;
 flex-direction: column;
`;

const SingleComment = styled.div`
   border: 1px solid ${props => props.theme.palette.text.divider};
   border-radius: 20px;
   width: fit-content;
   color: ${props => props.theme.palette.text.secondary};
   margin: ${props => props.theme.spacing([0.5])};
   padding: ${props => props.theme.spacing([0, 0.5])};
`;

const TextAreaContainer = styled.div`
   border: 1px solid ${props => props.theme.palette.text.divider};
   color: ${props => props.theme.palette.text.secondary};
   margin: ${props => props.theme.spacing([0.5])};
   padding: ${props => props.theme.spacing([0.5, 0.5])};
`;

const Textarea = styled.textarea`
  width: 100%;
  overflow-y: auto;
  height: 100px;
  resize: none;
  border-color: ${props => props.theme.palette.text.grey};
  &:focus {
    outline: none;
    border-color: ${props => props.theme.palette.primary.light};
}
`;

const H4 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 5px;
`;

const ShowHideBtn = styled.span`
    cursor: pointer;
    margin-left: ${props => props.theme.spacing([0.4])};

`;

export default PostItem;

