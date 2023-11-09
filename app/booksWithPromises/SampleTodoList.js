import React from "react";
import Pagination from "../utils/PaginationsBooks";
import TodoTable from "./TodoTable";

function SampleTodoList({
  fetchSampleData,
  displayedTodoList,
  showPagination,
  currentPage,
  allPages,
  handleTodoPageChange,
  isLoading,
}) {
  return (
    <section
      className="max-w-7xl w-full mx-auto mt-4 mb-10 p-4 bg-opacity-20 backdrop-blur-md border rounded-3xl shadow-xl bg-white text-gray-200"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h3 className="text-center text-lg md:text-xl lg:text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        Sample Todo List
      </h3>
      <div className="text-base lg:text-lg text-[#ADB7BE]">
        <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2 text-white">
          In this example, we fetched the todo via JavaScript Promises.
        </p>
        <hr className="my-4 w-full border-t-2 border-gray-400" />
        <div className="text-center p-4">
          <button
            type="button"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white whitespace-nowrap font-medium p-3 mt-2 mb-3 rounded-3xl w-52 transition-all duration-300 transform hover:scale-105"
            onClick={fetchSampleData}
            disabled={isLoading}
          >
            {isLoading ? "Fetching Data..." : "Button to fetch data"}
          </button>
        </div>
        {displayedTodoList.length > 0 && (
          <TodoTable
            displayedTodoList={displayedTodoList}
            currentPage={currentPage}
            allPages={allPages}
            handleTodoPageChange={handleTodoPageChange}
          />
        )}
        {showPagination && (
          <div className="mt-4 text-center px-2 sm:px-0 overflow-x-auto sm:overflow-visible">
            <Pagination
              currentPage={currentPage}
              totalPages={allPages}
              onPageChange={handleTodoPageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default SampleTodoList;
