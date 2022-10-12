const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;



const fetchCategories = async () => {
    const resp = await fetch(`${baseUrl}/category/all`);
    const data = await resp.json();
    return data;
};

const fetchOneCategoryById = async (categoryId) => {
    const request = new Request(`${baseUrl}/category/${categoryId}`, {
        method: 'GET',
    });
    const response = await fetch(request);
    const data = await response.json();
    const category = data && data.length > 0 ? data[0] : null;
    return category;
};

const deleteCategoryByCategoryId = async (categoryId) => {

    const request = new Request(`${baseUrl}/category/${categoryId}`, {
        method: 'DELETE'
    });
    await fetch(request);
  

};

const addCategory = async (category) => {

    const request = new Request(`${baseUrl}/category/create`, {
        method: 'POST'
    });

};

const dao = {
    fetchCategories,
    fetchOneCategoryById,
    deleteCategoryByCategoryId
};

export default dao;