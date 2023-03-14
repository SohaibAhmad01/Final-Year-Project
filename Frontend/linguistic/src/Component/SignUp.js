import React from "react";
import { Link } from "react-router-dom";
import SignCSs from "../CSS/SignUp.module.css";   


class SignUp extends React.Component{
   render(){
       return(
            <React.Fragment>
                  <div class={SignCSs.body}>
                        <div class="ui grid" id={SignCSs.maingrid}>
                            <div class="five wide column" id={SignCSs.grid2}>
                                <div id={SignCSs.content}>
                                    <p id={SignCSs.sci}>Hello Data Scientist!</p>
                                    <p id={SignCSs.pe}>To keep connected with us please sign up with personal and authentic information</p>
                                    <button id={SignCSs.btn2}>
                                        <Link to="./SignIn" id={SignCSs.btntext}>SIGN IN</Link>
                                    </button>
                                </div>
                            </div>
                            <div class="six wide column" id={SignCSs.one}>
                                <p id={SignCSs.g}>Create Account</p>
                                <div class={SignCSs.icons}>
                                    <i class="large facebook icon"></i>
                                    <i class="large twitter icon"></i>
                                    <i class="large linkedin icon"></i>
                                </div>
                                <p id={SignCSs.p}>Or use your account</p>
                                <form class="ui form">
                                    <div class="feild" id={SignCSs.feild}>
                                        <label class={SignCSs.label}>Enter your Name:</label>
                                        <input type="text" placeholder="Name"></input>
                                    </div> 
                                    <div class="feild" id={SignCSs.feild}>
                                        <label class={SignCSs.label}>Enter your mail:</label>
                                        <input type="email" placeholder="Email"></input>
                                    </div>
                                    <div class="feild" id={SignCSs.feild}>
                                        <label class={SignCSs.label}>Select a strong password:</label>
                                        <input type="password" placeholder="Password"></input>
                                    </div>
                                   <br/>
                                    <button to="./SignIn" class="button" id={SignCSs.button}>
                                        <a id={SignCSs.btntext}>SIGN UP</a>
                                    </button>
                                    
                                </form>
                                
                            </div>
                            


                        </div>
                  </div>
            </React.Fragment>
       );
   }
}
export default SignUp;