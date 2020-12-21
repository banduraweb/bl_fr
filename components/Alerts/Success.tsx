import React from 'react';
import {MSG} from "../../shared";

type Props = {
    message: string
}

const Success = ({ message }: Props): JSX.Element => {
    return (
        <>
            <MSG>{message}</MSG>
        </>
    )
};

export default Success;
