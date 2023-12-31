import React from "react";

const Pagination = ({
  projectsPerPage,
  totalProjects,
  paginate,
  currentPage,
}) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(totalProjects / projectsPerPage) },
    (_, i) => i + 1
  );

  const getButtonClasses = (isActive) => {
    const baseClasses =
      "relative block rounded bg-transparent px-4 py-2 sm:text-md mt-2 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white min-w-[44px] min-h-[44px]";
    const activeClasses = "text-white bg-neutral-400";
    const inactiveClasses = "text-neutral-400";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(pageNumbers.length, currentPage + 2);

  if (currentPage <= 3) {
    endPage = Math.min(pageNumbers.length, 5);
  }
  if (currentPage > pageNumbers.length - 3) {
    startPage = Math.max(1, pageNumbers.length - 4);
  }

  const displayedPageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <nav>
      <ul className="list-style-none flex justify-center mt-4 overflow-x-auto">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={getButtonClasses(false)}
          >
            &laquo;
          </button>
        </li>
        {displayedPageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={getButtonClasses(currentPage === number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className={getButtonClasses(false)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
