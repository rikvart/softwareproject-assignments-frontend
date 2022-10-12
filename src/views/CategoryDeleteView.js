import React, { Text, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";

const CategoryDeleteView = () => {

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
        console.log("deleted")
    }

    return (
        <div onClick={DeleteRow}>
            aaaa
        </div>
    );
}

export default CategoryDeleteView;