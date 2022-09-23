const initialState = {
    greeting: "hi",
    goodbye: "Bye for now",
    do_more: "I'm working"
}

const SayHelloReducer = (state=initialState,action) => {

    switch(action.type){

        case "SAY_HELLO":
            return{
                ...state,
                greeting: action.payload
            }
        
        case "SAY_GOODBYE":
            return{
                ...state,
                goodbye: action.payload
            }

        case "DO_MORE":
            return{
                ...state,
                do_more: action.payload
            }    

        default: return state;

    }

}



export default SayHelloReducer;