import React from "react";
import { Route } from "react-router-dom";

const CategoryDetails = ({index, details}) => {

    const clickHandler = (id) => {
        
    }

     return (<div onClick={clickHandler}> {details.id + ":" + details.name + ":" +details.details}</div>);
}

export default CategoryDetails;