import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from './views/CategoryDetailsView';

function App() {
 return (
  <div className="App">
    <Routes>
      <Route path='/category/all' element={<CategoryListView />} />
        <Route path='/category/:id' element={<CategoryDetailsView />} />
    </Routes>
    
  </div>
 );
}

export default App;
