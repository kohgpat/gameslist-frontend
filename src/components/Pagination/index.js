import React from "react";
import s from "./index.module.css";

const Pagination = ({ page, pageSize, hasMore, onPageSelect }) => {
  return (
    <div className={s.pagination}>
      <button
        type="button"
        onClick={() => onPageSelect(page - 1)}
        disabled={page === 0}
      >
        {"<"}
      </button>
      <div className={s.page}>{page + 1}</div>
      <button
        type="button"
        onClick={() => onPageSelect(page + 1)}
        disabled={!hasMore}
      >
        {">"}
      </button>
    </div>
  );
};

Pagination.defaultProps = {
  page: 0,
  pageSize: 5,
  hasMore: false,
  onPageSelect: () => {},
};

export default Pagination;
