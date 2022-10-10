import React from "react";
import { Route } from "react-router-dom";

const CategoryRow = ({index, category}) => {

 return (
    <div>
    {category.id + ":" +category.name}
 </div>
 );
}

export default CategoryRow;