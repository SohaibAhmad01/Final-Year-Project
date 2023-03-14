import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Menu} from 'semantic-ui-react';
import pic from "../Developers/sohaib.jpg";
import Dropcss from "../CSS/Dropdown.module.css";
import { Link } from "react-router-dom";

class ADropdown extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Dropdown text="Dashboard" pointing="top" class="Link Item" class={Dropcss.bigd}>
                    <Dropdown.Menu>
                        <img src={pic} class={Dropcss.img}></img>
                        <Dropdown.Item>Your Information</Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="./User">
                                <p class={Dropcss.p}>LOGOUT</p>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </React.Fragment>
        )
    }
}
export default ADropdown;
