import React from "react";
import Navbar from "./Navbar";
import { useRef } from "react";
function SignUp(){

    const input = useRef();
    
    const SubmitData = (e) =>{
        e.preventDefault();
        console.log(input.current.value)
        // e.preventDefault();
    }
    return(
        <>
            <Navbar/>
            <form action="" className="signup-container">
            <h1 className="h1">Welcome to Sign Up page</h1>
                <div className="signup">
                    <div className="label">
                        <label htmlFor="" >Name</label> <br />
                        <input type="text" ref={input} required  /> <br />
                    </div>
                    <div className="label">
                        <label htmlFor="">Mobile Number</label> <br />
                        <input type="number" ref={input}  required /> <br />
                    </div>
                    {/* <div className="label">
                        <label htmlFor="">Email</label> <br />
                        <input type="email"  required /> <br />
                    </div>
                    <div className="label">
                        <label htmlFor="">Password</label> <br />
                        <input type="password"  required /> <br /> 
                    </div>
                    <div className="label">
                        <label htmlFor="">Confirm Password</label> <br />
                        <input type="text" required /> <br /> <br />
                    </div> */}
                    <button onClick={(e)=>SubmitData(e)} >Submit</button>
                </div>
            </form>
        </>
    )
}

export default SignUp;