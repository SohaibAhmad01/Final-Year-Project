import React from "react";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

class User extends React.Component{
    render(){
        return(
            <div>
                <SignIn/>
            </div>
        )
    }
}
export default User;