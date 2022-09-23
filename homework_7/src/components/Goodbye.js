import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { sayBye } from '../actions/SayHelloActions';

export const Goodbye = () => {

    const dispatch = useDispatch();
    const pozdrav = useSelector(state=> state.SayHelloReducer.goodbye)

    useEffect(()=>{
        dispatch(sayBye())
    },[dispatch])
    
    return(
        <div id="goodbye">
            <h2>{pozdrav}</h2>
        </div>
    )
}