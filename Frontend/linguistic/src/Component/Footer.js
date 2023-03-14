import React from "react";
import Sohaib from "../Developers/sohaib.jpg";
import Tajammal from "../Developers/tajammal.jpg";
import FooterCss from "../CSS/Footer.module.css";
import { Link } from "react-router-dom";
class Footer extends React.Component{
 render(){
     return(
         <React.Fragment>
             <div class="ui grid" id={FooterCss.container}>
                 <div class="ui grid" id={FooterCss.box}>
                     <div class="ten wide column" id={FooterCss.G1}>
                         <p id={FooterCss.p1}>Ready to explore the Data sceince World?</p>
                         <p id={FooterCss.p2}>Let's get starded!</p>
                     </div>
                     <div class="six wide column" id={FooterCss.G2}>
                         <div class=" ui black button" id={FooterCss.btn}>
                             <div class={FooterCss.con}>
                                 <Link to="./ContactUs">ContactUS</Link>
                             </div>
                            
                         </div>
                     </div>
                 </div>
                <div class="ui grid"  id={FooterCss.bigbox}>
                 <div class="four wide column" id={FooterCss.Allg}>
                    <div class="ui relaxed devided list" style={{marginLeft:30, marginTop:20}}>
                        <h2 class={FooterCss.h1}> Channels</h2>
                        <div class="item">
                            <i class=" large red youtube middle aligned icon"></i>
                            <div class="content">
                            <a href="//www.youtube.com/channel/UCEv3Xpnie_lJnQz_o8zf3mQ" class="header" class={FooterCss.head}>Youtube</a>
                            </div>
                        </div>
                        <div class="item">
                            <i class="  large blue twitter middle aligned icon"></i>
                            <div class="content">
                            <a href="//twitter.com/SohaibA67962571" class="header" class={FooterCss.head}>Twitter </a>
                            </div>

                        </div>
                        <div class="item">
                            <i class="   large blue facebook middle aligned icon"></i>
                            <div class="content">
                            <a href="" class={FooterCss.head}> WhatMobile</a>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div class="four wide column" id={FooterCss.Allg}>
                     <div class="ui  list" style={{marginTop:20}}>
                     <h2>Technology Used</h2>
                         <div class="item">
                             <div class={FooterCss.head}> Twint</div>
                         </div>
                         <div class="item">
                         <div class="item">
                             <div class={FooterCss.head}> YouTube API</div>
                         </div> 
                         </div>
                         <div class="item">
                         <div class="item">
                             <div class={FooterCss.head}>Selinium</div>
                         </div>
                         </div>
                        </div>
                 </div>
                 <div class=" four wide column" id={FooterCss.Allg}>
                     
                     <div class="ui list" style={{marginTop:20}}>
                     <h2>Process</h2>
                         <div class="item">
                         <div class="item">
                             <div class={FooterCss.head}>Data Scrapping</div>
                         </div> 
                         </div>
                         <div class="item">
                         <div class="item">
                             <div class={FooterCss.head}>Data Pre-Processing</div>
                         </div>
                         </div>
                         <div class="item"> 
                         <div class="item">
                             <div class={FooterCss.head}>Subjectivity classfication</div>
                         </div>
                         </div>
                         <div>

                         </div>
                     </div>
                 </div>
                 <div class=" four wide column" id={FooterCss.Allg}>
                     
                     <div class="ui list" style={{marginTop:20}}>
                     <h2>Developers</h2>
                         <div class="item">
                        <img class="ui avatar image" src={Tajammal}></img>
                         
                         <div class="content" >
                             <div class="header"  >
                             <div class="item">
                             <div >
                                 <a href="//www.instagram.com/techniciantj08/" class={FooterCss.head}>Tajammal Amin</a>
                             </div>
                         </div> 
                             </div>
                             <div class="description" id={FooterCss.desc} >Data Scientist</div>
                         </div>
                         </div>

                         <div class="item" >
                             <img class="ui avatar image" src={Sohaib}></img>
                             <div class="content">
                                 <div class="header" >
                                 <div class="item">
                             <div >
                                 <a href="//www.instagram.com/sohaib_ahmad0/" class={FooterCss.head}>Sohaib Ahmad</a>
                             </div>
                         </div>
                         </div>
                         <div class="description" id={FooterCss.desc}> React Developer</div>
                         </div>
                         </div>
                     </div>
                 </div>
                </div>
             </div>
         </React.Fragment>
     );
 }
};
export default Footer;