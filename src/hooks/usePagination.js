import { useState } from "react";

export default function usePagination(items, itemsPerPage = 6) {
  const [page, setPage] = useState(1);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const displayedItems = items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const nextPage = () => {
    if (!isLastPage) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (!isFirstPage) setPage((prev) => prev - 1);
  };

  const resetPage = () => setPage(1);

  return {
    page,
    totalPages,
    displayedItems,
    isFirstPage,
    isLastPage,
    nextPage,
    prevPage,
    resetPage,
    setPage,
  };
}
