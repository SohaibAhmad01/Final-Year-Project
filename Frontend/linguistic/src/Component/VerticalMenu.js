import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import VerticalCss from "../CSS/VerticalMenu.module.css";
import ADropdown from "./Dropdown";

const VerticalMenu =()=>{
  
    return(
        <React.Fragment>
           
             <div class="ui vertical menu" id={VerticalCss.head}>
                 <br/>
                        <p class={VerticalCss.headings}>
                            <div class={VerticalCss.item}>
                                <a className="content" class={VerticalCss.a}><ADropdown/></a>
                            </div>
                        </p>
                        <div class="ui horizontal divider">
                            ***
                         </div> 
                        <p class={VerticalCss.channel}> Channels</p>
                        
                        <p class={VerticalCss.headings}>
                         <i class="white youtube icon"></i>   
                         <div class={VerticalCss.item}>
                        <Link to="/Main" className="content" class={VerticalCss.a}> YouTube</Link>
                        </div>
                        </p>
                        <p class={VerticalCss.headings}>
                         <i class="white twitter icon"></i>   
                         <div class={VerticalCss.item}>
                        <Link  to="/Twitter" className="content" class={VerticalCss.a}> Twitter</Link>
                        </div>
                        </p>
                        <p class={VerticalCss.headings}>
                         <i class="google icon"></i>   
                         <div class={VerticalCss.item}>
                        <Link to="/WhatMobile" className="content" class={VerticalCss.a}>Bloging Website</Link>
                        </div>
                        </p>

                        <div class="ui horizontal divider">
                            ***
                         </div> 
                        <p class={VerticalCss.data}>Data</p>
                       

                        <p class={VerticalCss.headings}>
                         <i class="white settings icon"></i>   
                         <div class={VerticalCss.item}>
                        <a className="content" class={VerticalCss.a}>Data Annotation</a>
                        </div>
                        </p>

                        <p class={VerticalCss.headings}>
                         <i class=" white search icon"></i>   
                         <div class={VerticalCss.item}>
                        <a className="content" class={VerticalCss.a}>Data Cleaning</a>
                        </div>
                        </p>
                        <p class={VerticalCss.headings}>
                         <i class=" white user secret icon"></i>   
                         <div class={VerticalCss.item}>
                        <a className="content" class={VerticalCss.a}>Classifications</a>
                        </div>
                        </p>

                        <p class={VerticalCss.headings}>
                         <i class="white bar chart icon"></i>   
                         <div class={VerticalCss.item}>
                        <a className="content" class={VerticalCss.a}>Data Visualization</a>
                        </div>
                        </p>

                        <p class={VerticalCss.headings}>
                         <i class="white user icon"></i>   
                         <div class={VerticalCss.item}>
                        <a className="content" class={VerticalCss.a}>Custom checks</a>
                        </div>
                        </p>
                        <br/>
                        
                    </div>
        </React.Fragment>
    )
}
export default VerticalMenu;