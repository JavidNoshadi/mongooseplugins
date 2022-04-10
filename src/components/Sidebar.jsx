import { useState , useEffect } from "react";
import {Link} from "react-router-dom";


const Sidebar = (props) => {
    let {links} = props;
    return(
        <>
        {links.map((link, index) => {
            return(
                <div key={index}>
                    <a href={link.url}>{link.name}</a>
                </div>
            )
        })}
        </>
    )
}


export default Sidebar;