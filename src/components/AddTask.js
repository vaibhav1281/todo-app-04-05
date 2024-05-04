import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./actions";

const AddTask = ({ onAddTask, isAuthenticated }) => {
  const user = useSelector((state) => state.user);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task, priority);
    setTask("");
    setPriority("Low");
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className=" w-full justify-center flex items-center font-semibold mt-4">
      <form onSubmit={handleSubmit} className="w-7/12">
        <div className="flex justify-around items-center">
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p>{user ? user : "Guest"}</p>
          </div>
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="bg-red-500 p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="flex mx-auto justify-center space-x-4 m-4 w-[50%]">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            className="outline-none border-2 p-2 rounded-md"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className=" p-2 border-2 font-semibold rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-emerald-400 p-2 border-2 border-emerald-400 rounded-md flex-none justify-center mb-4 text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
