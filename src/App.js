import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AddBook from './components/AddBook';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import BookDetail from './components/book/BookDetail';
import Books from './components/book/Books';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Books/>} />
        <Route path='/add' element={<AddBook/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/books/:id' element={<BookDetail/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
