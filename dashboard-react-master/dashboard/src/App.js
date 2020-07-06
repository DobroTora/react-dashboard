import React , { useState, useEffect } from 'react';
import axios from 'axios';
import './scss/App.scss';
import Dashboard from './components/Dashboard';
import Pagination from './components/Pagination';


const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;
  const [count,setCount] = useState(20);

  useEffect(() => {
      const fetchBooks = async () => {
          setLoading(true);
          const res = await axios.post(`http://nyx.vima.ekt.gr:3000/api/books?page=${currentPage}`);
          setBooks(res.data.books);
          setCount(res.data.count);
          setLoading(false);
      }
      fetchBooks();
      }, [currentPage]);

      const paginate = (pageNumber) => setCurrentPage(pageNumber);
      console.log(books)

  return (

    <div className="App">
      <Dashboard books={books} loading={loading} />
      <Pagination booksPerPage={booksPerPage} totalBooks={count} paginate={paginate}/>
    </div>
  );
}

export default App;
