import React from "react";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
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
Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
