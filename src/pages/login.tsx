import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {setAuthentication  } from "../store/authAction"

function Login(){

    type AuthType = {
        name:string;
        isLoggedIn: boolean
    }

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        name:""
    });

    const handleChange = (e:any) => {
        setForm({
            name:e.target.value
        })
    }

    const handleSubmit =(e:any) =>{
        e.preventDefault();
        
        const outcome:AuthType = {
            name:form.name,
            isLoggedIn: true
        };

        dispatch(setAuthentication(outcome));

    }

    return(
        <div>
            <form className="text-black" onSubmit={(e)=>handleSubmit(e)}>
                <input type="email" className="font-bold border border-black rounded-lg m-4 p-4" name="email" placeholder="email" required onChange={handleChange}/>
                <input type="password" className="font-bold border border-black rounded-lg m-4 p-4"name="password" placeholder="password" />
                <button type="submit" className="border-blue-900 p-5 m-5">Submit</button>
            </form>
        </div>
    )
}

export default Login;