import React, { useState, useEffect } from "react";
import CategoryDetails from "../components/CategoryDetails";
import dao from "../ajax/dao";
import { Routes, Route, Link } from "react-router-dom";


const CategoryDetailsView = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        // ...do something ONLY when component did mount
        // Notice: even if categories state change => not fired
        async function refreshCategories() {
            const data = await dao.fetchCategory();
            setDetails(data);
        }
        refreshCategories();
    }, []);

    useEffect(() => {
        // ...do something when 1. component did mount
        // 2. categories state changes
    }, [details]);


    return (
        <div>
        {details && details.length > 0 ?
            details.map((item) =>
                <CategoryDetails key={item.id}
                    id={item.id}
                    details={item}
                   
                     />

            ) : "no categories yet"
        }
    </div>
        
    
    );}

    export default CategoryDetailsView;