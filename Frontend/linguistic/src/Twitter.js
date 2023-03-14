import React,{useState} from "react";
import Header from "./Component/Header";
import VerticalMenu from "./Component/VerticalMenu";
import Footer from "./Component/Footer";
import { Helmet } from "react-helmet";
import MainCss from "./CSS/MainCss.module.css";


export default()=>{
    const [term , setterm]=useState('');

    return(
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Linguistic_Processor</title>
                <meta name="description" content="linguistic Processor"></meta>
            </Helmet>
            <Header/>
            <div class={MainCss.grad}>
                <div class="ui grid">
                    <div class="three wide column">                
                      <VerticalMenu/>
                    </div>
                     <div class="twelve wide column">
                        <div class="ui card" id={MainCss.card2}>
                            <div class="content">
                                <div  class="Header" id={MainCss.icon}>
                                    <i class="massive royal blue twitter icon"></i>
                                </div> 
                            </div>
                            <div class="content">
                                <div class="" id={MainCss.subheading}>
                                    Turn an inspirational quote into visual story
                                </div>
                            </div>
                            <div class="content">
                                <form class={MainCss.form}>
                                    <label>Enter Term:</label>
                                    <div>
                                        <input type="text" value={term} onChange={e=> setterm(e.target.value)} class={MainCss.inputs} ></input>
                                        <p>{term}</p>
                                    </div>
                                    <label>Select Criteria:</label>
                                    <div>
                                        <input type='text'   class={MainCss.inputs}></input>
                                    </div>
                                    <button class={MainCss.Button}>Start Search</button>

                                </form>
                            </div>

                        </div>
                    </div>           
                </div>
            </div> 
            <Footer/>
        </React.Fragment>
    );
}
