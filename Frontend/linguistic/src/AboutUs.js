import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sohaib from "./Developers/sohaib.jpg";
import Tajammal from "./Developers/tajammal.jpg";
import Arsalan from "./Developers/Arsalan.jpg";
import AboutCss from "./CSS/AboutCss.module.css";
export default()=>{

    return(
        <React.Fragment>
            
            <Header/><br/> 
            <div class={AboutCss.grad}>
                <div style={{marginLeft:100}}>        
                    <div>
                        <p class={AboutCss.mission}>OUR MISSION</p>
                        <p class={AboutCss.para}>
                        “Our mission is to perform real time extraction,
                        cleaning, normalization of contextualized and
                        country specific user generated contents from
                        different social media channels.
                        Further this study aims to preprocess and 
                        annotate extracted contents with subjective labels
                        via deep learning classifier”. 
                        </p>
                    </div>
                    <div class="ui grid" >
                        <div class="three column row">
                            <div class="column">
                               <div class="ui card" id={AboutCss.card}>
                                    <div  class="content">
                                        <h4>  Our Community</h4>
                                    </div>
                                    <div class="content">
                                        3k+
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui card" id={AboutCss.card}>
                                    <div class="content">
                                       <h4> Record fetch</h4>
                                    </div>
                                    <div class="content">
                                        300K+
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui card" id={AboutCss.card}>
                                    <div class="content">
                                        <h4>Rating</h4>
                                    </div>
                                    <div class="content">
                                        4.2+
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                   
                    <div class="ui grid">
                        <div class="six wide column">
                            <div class="ui card" id={AboutCss.card}>
                                <div class="image">
                                    <img src={Tajammal}></img>
                                </div>
                                <div class="content">
                                    <div class={AboutCss.arslan}> Tajammal Amin</div>
                                </div>
                    </div> 

                        </div>
                        <div class="ten wide column"> 
                        <ol class="ui list" id={AboutCss.list}>
                                <li value="*"> Graduated Comsats University Vehari - CU</li>
                                <li value="*"> Deep knowledge about Data Engineering</li>
                                <li value="*">Studied Human Behaviour using NLP</li>
                                <ol>
                                    <li value="-">Data Scientist</li>
                                    <li value="-">Data Manipulator</li>
                                    <li value="-">studied sementic Analysis</li>
                                </ol>
                            </ol>
                        
                         </div>
                    </div>

                    <div class="ui grid">
                        <div class="ten wide column">
                            <ol  class="ui list" id={AboutCss.list}>
                                <li value="*"> Graduated from Comsats University Vehari - CU</li>
                                <li value="*">Data Analyst</li>
                                <li value="*">Studies Natural Language Behaviour deeply</li>
                                <ol>
                                    <li value="-">React Developer</li>
                                    <li value="-">Data Scrapper</li>
                                    <li value="-">Django Developer</li>
                                </ol>
                            </ol></div>
                        <div class="six wide column">
                            <div class="ui card" id={AboutCss.card}>
                                <div class="image">
                                    <img src={Sohaib}></img>
                                </div>
                                <div class="content">
                                    <div class={AboutCss.arslan}> Sohaib Ahmad</div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div><br/><br/> 
            </div>   
            <Footer/>
        </React.Fragment>

    );
}
