import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from './views/CategoryDetailsView';
import CategoryDeleteView from './views/CategoryDeleteView';
import AddRandomCategoryView from "./views/AddRandomCategoryView";

function App() {
 return (
  <div className="App">
    <Routes>
      <Route path='/category/all' element={<CategoryListView />} />
        <Route path='/category/:categoryId' element={<CategoryDetailsView />} />
        <Route path='/category/:categoryId' element={<CategoryDeleteView />} />
        <Route path='/category/create' element={<AddRandomCategoryView />} />
    </Routes>
    
  </div>
 );
}

export default App;
