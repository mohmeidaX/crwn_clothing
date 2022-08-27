import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"
import DIRECTORY_DATA from "./directory.data";

class Directory extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            items : DIRECTORY_DATA
        };
    }

    render() {
      const {items} = this.state;
        return(
            <div className = "directory-menu">
               {
                   items.map(({id, ...otherSectionPros }) => ( 
                    <MenuItem key = {id} {...otherSectionPros} ></MenuItem>
                   ))
               }
            </div>
            )
    }
}

export default Directory; 