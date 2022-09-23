import React,{useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import {doMore} from "../actions/SayHelloActions";

export function DoMore(){
    const dispatch = useDispatch();
    const do_more = useSelector(state=>state.SayHelloReducer.do_more);

    useEffect(()=>{
        dispatch(doMore())
    },[dispatch])
    return(
        <div id="do_more">
            <h2>{do_more}</h2>
        </div>
    )
}