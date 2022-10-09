import React from "react";

const CategoryRow = ({index, category}) => {

    const clickHandler = () => {
        console.log("hello")
    }

 return (<div onClick={clickHandler}>{category.id + ":" +category.name}</div>);
}

export default CategoryRow;