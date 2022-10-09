const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;

const fetchCategories = async () => {
    const resp = await fetch(`${baseUrl}/category/all`);
    const data = await resp.json();
    return data;
};

const fetchCategory = async ( {id} ) => {
    const resp = await fetch(`${baseUrl}/category/${id}`);
    const data = await resp.json();
    return data;
};

const dao = {
    fetchCategories,
    fetchCategory,
};

export default dao;