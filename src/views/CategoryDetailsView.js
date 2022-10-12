import React, { Button, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";
import CategoryDeleteView from "../views/CategoryDeleteView"

const CategoryDetailsView = () => {

    const [category, setCategory] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        async function getCategory() {
            const data = await dao.fetchOneCategoryById(categoryId);
            setCategory(data);
        }
        getCategory();
    }, []);

    const DeleteRow = () => {
        dao.deleteCategoryByCategoryId(category.id);
    }

    return (

        <div>
            <h1>Details of a Category</h1>
            <dl>
                <dt>id: {category.id}</dt>
                <dd>name: {category.name}</dd>
                <dd>budget: {category.budgetLimit}</dd>
            </dl>
             <CategoryDeleteView category={category} />
            
            <nav>
                <Link to="/category/all">Back to list</Link>
            </nav>
           
        </div>
        
    );
}

export default CategoryDetailsView;