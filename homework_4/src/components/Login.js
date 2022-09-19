import React,{useState} from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";


export function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [comment, setComment] = useState("");
    const [fieldType,setFieldType] = useState("password");
    const [longComment, setLongComment] = useState(false)
    const [selectedOption,setSelectedOption] = useState("Facebook");

    const apps=[
        { value: "Facebook", name: "Facebook" },
        { value: "Instagram", name: "Instagram" },
        { value: "SnapChat", name: "SnapChat" }
    ];

    const cars = [
        { value: "Volvo", name: "Volvo" },
        { value: "Mercedes", name: "Mercedes" },
        { value: "Opel", name: "Opel" }
    ];

    function changeInputType(){
        setFieldType(
            fieldType === "password" ? "text" : "password"
        );
    }

    function handleSubmit(event){
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}\nDropdown:${selectedOption}`);
    }

    return(
        <div id="login">
            <form onSubmit={handleSubmit}>
                <Input
                 type="text"
                 placeholder="Enter Username"
                 value={username}
                 pratiMiIzmeni={(e)=>{ setUsername(e.target.value)}}
                />
                <Input
                type={fieldType}
                placeholder={"Enter Password"}
                name="password"
                value={password}
                pratiMiIzmeni={(e)=>setPassword(e.target.value)}
                changeInputType={changeInputType}
                />
                <Input
                type="text"
                placeholder="Enter Comment"
                value={comment}
                pratiMiIzmeni={(e)=> {setComment(e.target.value)}}
                name="comment"
                renderTextArea={longComment}
                changeField={() => {setLongComment(!longComment)}}
                />
                <Dropdown elements={apps} onChange={(e) => {setSelectedOption(e.target.value)}}
                />
                <Dropdown elements={cars} onChange={(e) =>{setSelectedOption(e.target.value)}}
                />
                <button className='action-button'>Sign in</button>
            </form>
        </div>
    )
}