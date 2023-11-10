import React from "react";

function TodoTable({ displayedTodoList }) {
  return (
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
          {displayedTodoList.map((todo, index) => (
            <tbody
              key={todo.id}
              className={`my-2 ${
                index % 2 === 0
                  ? "bg-opacity-10 backdrop-blur-md"
                  : "bg-[#1b1d1e]"
              } hover:bg-opacity-20 transition-all duration-300 rounded-3xl`}
            >
              <tr className="rounded-3xl">
                <td
                  className="px-4 py-2 text-left rounded-l-3xl border-b-0"
                  data-testid={`todo-item-id-${todo.id}`}
                >
                  {todo.id}
                </td>
                <td
                  className="px-4 py-2 text-left border-b-0"
                  data-testid={`todo-item-title-${todo.id}`}
                >
                  {todo.title}
                </td>
                <td
                  className="px-4 py-2 text-left border-b-0"
                  data-testid={`todo-item-userId-${todo.id}`}
                >
                  {todo.userId}
                </td>
                <td
                  className="px-4 py-2 text-left rounded-r-3xl border-b-0"
                  data-testid={`todo-item-completed-${todo.id}`}
                >
                  {todo.completed.toString()}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default TodoTable;
