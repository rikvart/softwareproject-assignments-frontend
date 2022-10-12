import React from "react";
import { Route } from "react-router-dom";

const CategoryDetails = ({index, category}) => {


     return (
     
     <div> {category.id + ":" + category.name + ":" +category.details}</div>);
}

export default CategoryDetails;