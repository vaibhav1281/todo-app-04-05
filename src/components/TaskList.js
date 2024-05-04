import React from "react";

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="w-full justify-center flex items-center font-semibold mt-4">
      <ul className="md:w-4/12 max-sm:w-auto sm:w-auto flex flex-col justify-between">
        {tasks.map((task, index) => (
          <li key={index} className="space-x-4 w-full border-b-2 flex justify-between mb-2 pb-2 items-center">
            <span>
              {task.task} - <span className="bg-pink-400 text-white p-1 rounded-xl">{task.priority}</span>
            </span>
            <button onClick={() => onDeleteTask(index)}
            className="bg-red-500 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                className="w-6 h-6 hover:animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TaskList;
