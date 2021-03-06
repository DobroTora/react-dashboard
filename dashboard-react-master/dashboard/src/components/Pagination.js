import React from 'react';

const Pagination = ({booksPerPage, totalBooks, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers)

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a href="#" onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav>
            <ul>
              

            </ul>
            </nav>
        </div>
      );

}

export default Pagination;