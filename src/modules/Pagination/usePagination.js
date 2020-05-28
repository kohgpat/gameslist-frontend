import { useState } from "react";

export const usePagination = (params = { page: 0, pageSize: 10 }) => {
  const [page, setPage] = useState(params.page || 0);
  const [pageSize] = useState(params.pageSize || 10);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return {
    page,
    pageSize,
    handlePageChange,
  };
};
