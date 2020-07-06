import React , { useState } from 'react';
import '../scss/Dashboard.scss';
import 'font-awesome/css/font-awesome.min.css';


const Dashboard = ({books}) => {
    const [query, setQuery] = useState('');
    const [maxResults, setMaxResults] = useState(20);
    const [startIndex, setStartIndex] = useState(1);

  return (
    
    <div>
        <div className='hero d-flex justify-content-center align-items-center flex-column'>   
             <h1>Library Books</h1>
             <div className="container">
             <div className="row">
             </div>
                <div className="col-md-12">
                    <div className="input-group justify-content-sm-center m-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
                        </div>
                    
                            <input type="text" className="form-control" placeholder="Search Book" aria-label="Search Book" aria-describedby="basic-addon1"  placeholder='Book Search'
                                value={query} onChange={e => setQuery(e.target.value)}></input>  
                    </div>
                </div>
             </div>
             
             <div className="container">
             <div className="row">
             <div className="col-sm-3 m-3">
                    <div className="input-group justify-content-sm-center m-3">
                            <input type="text" className="form-control" placeholder="Search Book" aria-label="Search Book" aria-describedby="basic-addon1"  placeholder='Book Search'
                                      type='number'
                                      id='maxResults'
                                      placeholder='Max Results'
                                      value={maxResults}
                                      onChange={e => setMaxResults(e.target.value)}>
                            </input>        
                        </div>
                    </div>
                    <div className="col-sm-3 m-3">
                    <div className="input-group justify-content-sm-center m-3">
                            <input type="text" className="form-control" placeholder="Search Book" aria-label="Search Book" aria-describedby="basic-addon1"  placeholder='Book Search'
                                         type='number'
                                         id='startIndex'
                                         placeholder='Start Index'
                                         value={startIndex}
                                         onChange={e => setStartIndex(e.target.value)}>
                            </input>        
                        </div>
                    </div>
                </div>
                </div>
        </div>
        
         <table className="table table-dark darkTable" >
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Author</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">Pages</th>
                <th scope="col">Title</th>
                </tr>
            </thead>
            <tbody>
            {
               books.map(book => (
                <tr key={book.id} className="list">
                <th scope="col">#</th>
                    <td>{book.author}</td>
                    <td>{book.book_author}</td>
                    <td>{book.book_title}</td>
                    <td>{book.book_publication_year}</td>
                    <td>{book.book_publication_country}</td>
                    <td>{book.book_publication_city}</td>
                    <td>{book.book_pages}</td>
                </tr>
         ))}
         
            </tbody>
        </table> 
    </div>
  );
}

export default Dashboard;
