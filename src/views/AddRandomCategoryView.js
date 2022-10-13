import React, { Button, useState, useEffect } from "react";
import dao from "../ajax/dao";
import { Routes, Route, Link } from "react-router-dom";


const AddRandomCategoryView = () => {


    const addCategory = () => {

        console.log("added");

    };



    return (
        <div>
            <div>
            Insert a random category
            </div>
            <span onClick={addCategory}>
                Press to add
            </span>
            <nav>
                <Link to="/category/all">Back to list</Link>
            </nav>

            
        </div>

    )
};

export default AddRandomCategoryView;