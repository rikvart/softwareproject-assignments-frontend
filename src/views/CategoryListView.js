import React, { useState, useEffect } from "react";

import CategoryListItem from "../components/CategoryListItem";
import dao from "../ajax/dao";
import { Routes, Route, Link } from "react-router-dom";



const CategoryListView = () => {
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        
        async function refreshCategories() {
            const data = await dao.fetchCategories();
            setCategories(data);
        }
        refreshCategories();
    }, []);


    useEffect(() => {
    
        
    }, [categories]);


    return (
        <>
            <h3>Categories</h3>
            <div>
                {categories && categories.length > 0 ?
                    categories.map((item) =>
                        <CategoryListItem key={item.id}
                            id={item.id}
                            category={item}
                           
                             />

                    ) : "no categories yet"
                }
            </div>
            <div>
                <Link to="/category/create">
                    Add a random category
                </Link>
            </div>
        </>
    );}

    export default CategoryListView;