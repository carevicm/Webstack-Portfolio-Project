import React from "react";
import Pagination from "../utils/PaginationsBooks";

function SampleTodoListSection({
  fetchSampleData,
  displayedTodoList,
  showPagination,
  currentPage,
  handleTodoPageChange,
  allPages,
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
      <div className="text-base lg:text-lg">
        <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg mt-2">
          This is a simple placeholder to fetch data from API using a button
        </p>
        <hr className="my-4 w-full border-t-2 border-gray-400" />
        <div className="text-center p-4">
          <button
            type="button"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white whitespace-nowrap font-medium p-3 mt-2 mb-3 rounded-3xl w-52 transition-all duration-300 transform hover:scale-105"
            onClick={fetchSampleData}
          >
            Button to fetch data
          </button>
        </div>
        {displayedTodoList.length > 0 && (
          <div>
            <div className="overflow-x-auto sm:overflow-visible mb-4">
              <table className="w-full table-auto text-lg mb-7">
                <thead>
                  <tr className="bg-opacity-20 backdrop-blur-md text-gray-300 rounded-3xl">
                    <th className="px-4 py-2 w-1/12 text-left">Id</th>
                    <th className="px-4 py-2 w-8/12 text-left">Title</th>
                    <th className="px-4 py-2 w-1/12 text-left">User Id</th>
                    <th className="px-4 py-2 w-1/12 text-left">Completed</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="overflow-x-auto sm:overflow-visible">
              <table className="w-full table-auto divide-y divide-transparent">
                {displayedTodoList.map((list, index) => (
                  <tbody
                    key={list.id}
                    className={`my-2 ${
                      index % 2 === 0
                        ? "bg-opacity-10 backdrop-blur-md"
                        : "bg-[#1b1d1e]"
                    } hover:bg-opacity-20 transition-all duration-300 rounded-3xl`}
                  >
                    <tr className="rounded-3xl">
                      <td className="px-4 py-2 text-left rounded-l-3xl border-b-0">
                        {list.id}
                      </td>
                      <td className="px-4 py-2 text-left border-b-0">
                        {list.title}
                      </td>
                      <td className="px-4 py-2 text-left border-b-0">
                        {list.userId}
                      </td>
                      <td className="px-4 py-2 text-left rounded-r-3xl border-b-0">
                        {list.completed.toString()}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              {showPagination && (
                <div className="mt-4 text-center w-full">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={allPages}
                    onPageChange={handleTodoPageChange}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SampleTodoListSection;
