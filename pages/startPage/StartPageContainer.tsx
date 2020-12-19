import React, {FC} from 'react'
import StartPage from './StartPage'
import { useDispatch, useSelector } from 'react-redux'
 const StartPageContainer: FC = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state=>state);
    return (
        <StartPage/>
    )
};

export default StartPageContainer;
