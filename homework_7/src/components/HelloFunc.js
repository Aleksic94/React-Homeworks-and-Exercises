import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { sayHello } from '../actions/SayHelloActions';

export function HelloFunc(){

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);

    useEffect(()=>{
        dispatch(sayHello())
    },[dispatch])
    return(
        <div id="hello-func">
            <h2>{greeting} Functional Component</h2>
        </div>
    )
}