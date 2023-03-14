import React from "react";
import Main from "./Main";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import User from "./User";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Twitter from "./Twitter"
import WhatMobile from "./WhatMobile";
import Result from "./Result";



function App(){
    return(

        <Router>
        <div class="App">
            
            <div class="content">
               <Switch>
                   <Route exact path="/">
                        <Main/>
                   </Route>
                   <Route path="/ContactUs">
                       <ContactUs/>

                   </Route>
                   <Route path="/AboutUs">
                       <AboutUs/>

                   </Route>
                   <Route path="/User">
                       <User/>

                   </Route>
                   <Route path="/SignIn">
                       <SignIn/>

                   </Route>
                   <Route path="/SignUp">
                       <SignUp/>

                   </Route>
                   <Route path="/Twitter">
                       <Twitter/>
                   </Route>
                   <Route path="/WhatMobile">
                       <WhatMobile/>
                   </Route>
                   <Route path="/Main">
                       <Main/>
                   </Route>

                    <Route path="/Result">
                       <Result/>
                   </Route>

               </Switch>
            </div>
        </div>
        </Router>
    )

}
export default App;