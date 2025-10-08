import React from "react";
import { useState } from "react";

function Task() {
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState(-1);

  const handleInput = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleAddOrUpdateTask = () => {
    if (currentTask.trim() === "") return;

    if (editTaskIndex === -1) {
      setTaskList((prevTasks) => [...prevTasks, currentTask]);
    } else {
      const updatedTasks = [...taskList];
      updatedTasks[editTaskIndex] = currentTask;
      setTaskList(updatedTasks);
      setEditTaskIndex(-1);
    }
    setCurrentTask("");
  };

  const handleDeleteTask = (indexToDelete) => {
    setTaskList((prevTasks) =>
      prevTasks.filter((_, index) => index !== indexToDelete)
    );

    if (editTaskIndex === indexToDelete) {
      setEditTaskIndex(-1);
      setCurrentTask("");
    }
  };

  const handleEditTask = (index) => {
    setCurrentTask(taskList[index]);
    setEditTaskIndex(index);
  };

  const handleCancelEdit = () => {
    setEditTaskIndex(-1);
    setCurrentTask("");
  };

  return (
    <div className="max-w-xl mx-auto mt-30 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 font-serif">
        📝 To-Do List
      </h2>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter your Task...."
          onChange={handleInput}
          value={currentTask}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleAddOrUpdateTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {editTaskIndex === -1 ? "Add" : "Update"}
        </button>

        {editTaskIndex !== -1 && (
          <button
            onClick={handleCancelEdit}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        )}
      </div>

      <ul className="space-y-3">
        {taskList.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
          >
            <span className="text-gray-800">{task}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEditTask(index)}
                className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
