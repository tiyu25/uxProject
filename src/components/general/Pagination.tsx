import { useState } from 'react';
interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}): React.JSX.Element => {
  
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [activePage, setActivePage] = useState<number>(1);

  const handlePageClick = (number: number) => {
    setActivePage(number);
    // paginate(number)
  };

  return (
    <div className="navContainer">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${activePage === number ? 'active' : ''}`}
            >
              <a
                href="!#"
                className="page-link"
                onClick={() => {
                  handlePageClick(number);
                  paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
