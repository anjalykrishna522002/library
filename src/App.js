import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewBook from './components/ViewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<AddBook/>}/>
        <Route path='/search' element={<SearchBook/>}/>
        <Route path='/delete' element={<DeleteBook/>}/>
        <Route path='/viewbook' element={<ViewBook/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
        </div>  

  );
}

export default App;
