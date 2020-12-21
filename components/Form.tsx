import React, {ReactNode} from 'react'
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});

import styled from "styled-components";


import {parseHtml} from "../helpers";
import {Comment} from "../types/types";


type Props = {
    loading: boolean,
    handleChange: (target)=>void,
    Submit: (e)=>void,
    mode: string,
    title: string,
    body: string,
    comments?: Comment[]
}

const FormPost = (props: Props) => {
    const {loading,  Submit, handleChange, mode, title, body} = props;

    return (

        <Form onSubmit={(e) => Submit(e)}>
            <label>
                <Input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />Title
            </label>
            <span>Body</span>
            <Editor>
                <ReactQuill
                    value={body || ""}
                    onChange={(e) => handleChange({
                        target: {name: "body", value: e}
                    })}
                    readOnly={false}/>
            </Editor>
            <ButtonSubmit type="submit"
                          disabled={
                              !title?.length
                              || !parseHtml(body)?.length
                              || loading

                          }
            >
                {mode === "create" ? "Create" : "Update" }
            </ButtonSubmit>
        </Form>

    )
};


export default FormPost;


const Form = styled.form`
    height: 49vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Input = styled.input`
   margin: ${props => props.theme.spacing([0, 0.5, 1, 0])};
`;

const ButtonSubmit = styled.button`
   width: fit-content;
`;

const Editor = styled.div`
   min-height: 30vh;
   overflow: auto;
`;
