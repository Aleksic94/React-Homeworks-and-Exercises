export const sayHello = () => { 
    return {
        type: "SAY_HELLO",
        payload: "Hi and welcome to my first Redux App"
    }
}

export const sayBye = () =>{
    return{
        type:"SAY_GOODBYE",
        payload:"Enough React for Today"
    }
}

export const doMore = () =>{
    return{
        type:"DO_MORE",
        payload:"Do more about your React App, and go to sleep"
    }
}
