import React, { useState } from "react";
import {Link} from "react-router-dom";
import HeaderCss from "../CSS/Header.module.css";
class Header extends React.Component{
   
   render(){
       return(
           <React.Fragment>
            <div > 
               <div class="ui secondary menu" id={HeaderCss.head}>
               <h3 class="ui header" style={{marginTop:15}}>
                <div className={HeaderCss.icon}>
                    <i class="search icon"  ></i>
                </div>
                <div className="content"  class={HeaderCss.logo}>
                   Linguistic_Processor
                </div>
               </h3>  
               <Link className="item" to="/" id={HeaderCss.item}>
                   Home
                </Link>

                <Link className="item" to="/Result" id={HeaderCss.item}>
                   Result
                </Link>

                <Link className="item " to="/ContactUs" id={HeaderCss.item}>
                   Contact US
                </Link>
                <Link className="item" to="/AboutUs"  id={HeaderCss.item}>
                    About US
                </Link>
                <div class="right menu">
                    <div class="item">
                        <div className="ui icon input">
                        <input type="text" placeholder="Search.."/>
                        <i class="search link icon" ></i>
                        </div>
                    </div>
                   
                </div>
                </div>
             </div>  
           </React.Fragment>

       )
   }

}
export default Header;