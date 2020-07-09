import React from "react";
import cn from "classnames";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import s from "./index.module.css";

const Pagination = ({ page, pageSize, hasMore, onPageSelect }) => {
  const prevButtonDisabled = page === 0;
  const nextButtonDisabled = !hasMore;

  return (
    <div className={s.pagination}>
      <button
        type="button"
        className={cn(s.control, prevButtonDisabled && s.controlDisabled)}
        onClick={() => onPageSelect(page - 1)}
        disabled={prevButtonDisabled}
      >
        <FiChevronLeft />
      </button>

      <div className={s.page}>{page + 1}</div>

      <button
        type="button"
        className={cn(s.control, nextButtonDisabled && s.controlDisabled)}
        onClick={() => onPageSelect(page + 1)}
        disabled={nextButtonDisabled}
      >
        <FiChevronRight />
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
