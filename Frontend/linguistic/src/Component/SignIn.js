import React from "react";
import { Link } from "react-router-dom";
import SignCSs from "../CSS/SignUp.module.css";   


class SignIn extends React.Component{
   render(){
       return(
            <React.Fragment>
                <div class={SignCSs.body}>
                      <div >
                        <div class="ui grid" id={SignCSs.maingrid}>
                            <div class="six wide column" id={SignCSs.one}>
                                <p id={SignCSs.h}>Sign In</p>
                                <div class={SignCSs.icons}>
                                    <i class="large facebook icon"></i>
                                    <i class="large twitter icon"></i>
                                    <i class="large linkedin icon"></i>
                                </div>
                                <p id={SignCSs.p}>Or use your account</p>
                                <form class="ui form">
                                    <div class="feild" id={SignCSs.feild}>
                                        <label class={SignCSs.label}>Enter Email</label>
                                        <input type="email" placeholder="Email"></input>
                                    </div> 
                                    <div class="feild" id={SignCSs.feild}>
                                        <label class={SignCSs.label}>Enter your password</label>
                                        <input type="password" placeholder="Password"></input>
                                    </div>
                                    <p id={SignCSs.q}>Forgot Your Password?</p>
                                    <button to="./SignUp" class="button" type="submit" id={SignCSs.button}>
                                        <Link to="/" id={SignCSs.btntext}>SIGN IN</Link>
                                    </button>
                                    
                                </form>
                                
                            </div>
                            <div class="five wide column" id={SignCSs.grid2}>
                                <div id={SignCSs.content}>
                                    <p id={SignCSs.sci}>Hello Data Scientist!</p>
                                    <p id={SignCSs.pe}>Enter your details and start journy with us</p>
                                    <button id={SignCSs.btn2}>
                                        <Link to="./SignUp" id={SignCSs.btntext}>SIGN UP</Link>
                                    </button>
                                </div>
                            </div>


                        </div>
                      </div>
                </div>      
            </React.Fragment>
       );
   }
}
export default SignIn;