import React from "react";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const newArr = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="pagination">
        {newArr.map((el) => {
          return (
            <li
              className={el === currentPage ? "page-item active" : "page-item"}
              key={el}
            >
              <a
                href="#/"
                className="page-link"
                onClick={() => onPageChange(el)}
              >
                {el}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
