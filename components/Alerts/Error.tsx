import React from 'react';
import {MSG} from "../../shared"

type Props = {
    message: string
}

const Error = ({ message }:Props): JSX.Element => {
  return (
    <>
      <MSG>{message}</MSG>
    </>
  )
};

export default Error;
