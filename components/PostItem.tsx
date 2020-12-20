import React, {useState} from "react";
import styled from "styled-components";
import {Post} from "../types/types";
import {doTags} from "../helpers";

type Props = {
    post: Post,
    idx: number
}

const PostItem = (props: Props) => {
    const {post} = props;
    const [identity, setIdentity] = useState(2);
    const initIdentity = doTags(post.body, 2);
    // @ts-ignore
    const selectOptions: number[] = [...new Set(Object.entries(initIdentity).map(elem => {
        const [, count] = elem;
        return count
    }))].sort((a, b) => a - b);

    return (
        <SinglePost>
            <h4>{post.title && post.title.toUpperCase()}</h4>
            {!!selectOptions.length && (
                <KeyWords>
                    <h6>Key words</h6>
                    <Select name="select" onChange={(e) => setIdentity(+e.target.value)}>
                        {selectOptions.map(option => (
                            <option key={option} value={option}>identity more then {option - 1} </option>
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
            <PostBody>{post.body}</PostBody>
            <Comments>
                <h4>Comments:</h4>
                {!!post.comments.length ? post.comments.map((comment) => (
                        <SingleComment key={comment.id}>
                            {comment.body}
                        </SingleComment>
                    ))
                    :
                    <span>No comment yet...</span>
                }
            </Comments>
            <TextAreaContainer>
                <h4>comment: </h4>
                <form>
                    <Textarea name="comment" id="">

                    </Textarea>
                </form>
            </TextAreaContainer>
        </SinglePost>
    )
};

const SinglePost = styled.div` 
  box-shadow: ${props => props.theme.shadows[1]};
  margin: ${props => props.theme.spacing([1])};
  padding: ${props => props.theme.spacing([2, 2])};
`;

const PostBody = styled.div` 
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
   color: ${props => props.theme.palette.text.secondary};
   margin: ${props => props.theme.spacing([0.5])};
   padding: ${props => props.theme.spacing([0, 0.5])};
`;

const TextAreaContainer = styled.div` 
   border: 1px solid ${props => props.theme.palette.text.divider};
   color: ${props => props.theme.palette.text.secondary};
   margin: ${props => props.theme.spacing([0.5])};
   padding: ${props => props.theme.spacing([0, 0.5])};
`;

const Textarea = styled.textarea` 
  width: 100%;
  overflow-y: auto;
  height: 100px;
  resize: none;
  &:focus { 
    outline: none;
    border-color: #719ECE;
} 
`;


export default PostItem;

