import React from "react";
import ContactCss from "./CSS/Contact.module.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer"
import lp from "./Images/Lp.png"

export default()=>{

    return(
        <React.Fragment>
            <Header/>
               <div class={ContactCss.top} >
                    <p class={ContactCss.contact}>CONTACT</p>
                   
                    <h3 class="ui header" style={{marginLeft:500}}>
                        <i class="heart icon"></i>
                        <div class="content" > We'd Love to HELP!</div>
                    </h3>
                    <p class={ContactCss.we}> We like to create things with fun, open minded people. Feel free to say Hello!</p>
                    <div class="ui grid">
                        <div class="eight wide column">
                           <div class="ui card" id={ContactCss.grid}>
                                 <div class="Content" id={ContactCss.heading1}>
                                     <div>
                                     Acknowledged us with your Keen views
                                     </div>
                                    
                                 </div>
                                 <div class="content">
                                     <form class={ContactCss.form}>
                                       <label>Enter your Name:</label>
                                       <div class="feild" >
                                           <input type="text" id={ContactCss.feild}></input>
                                       </div>
                                       <label>Enter your Email</label>
                                       <div class="feild" >
                                           <input type="email"  id={ContactCss.feild}></input>
                                       </div>
                                       <label>Enter Your Message</label>
                                       <div class="content">
                                            <textarea class={ContactCss.textarea}></textarea>
                                       </div>
                                       <div>
                                       <input type="submit" value="Submit" class={ContactCss.btn}></input>
                                       </div>
                                       
                                     </form>

                                 </div>
                           </div>
                        </div>
                        
                        <div class="eight wide column" id={ContactCss.all}>
                           <div class="ui card" id={ContactCss.card2}>
                               <div class="content">
                               <i class="location arrow icon"></i>
                                   <a>COMSATS University Islamabad, Vehari Campus</a>
                               </div>
                           </div>
                           <div class="ui card" id={ContactCss.card2}>
                               <div class="content">
                                   <i class="phone icon"></i>
                                   <a href="tel:+923117400460">0300-0000000</a>
                               </div>
                           </div>
                           <div class="ui card" id={ContactCss.card2}>
                               <div class="content">
                                   <i class="mail icon"></i>
                                   <a href="mailto:sohaibshafique303@gmail.com">
                                       sohaibshafique303@gmail.com
                                   </a>
                               </div>
                           </div>
                           <img src={lp} class={ContactCss.image}></img>
                           
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>

    );
}
