import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-8 mt-5">
      <h1 className="text-3xl font-bold text-blue-900 mb-10 font-serif mt-15  underline underline-offset-8 decoration-blue-300 ">
        MY PROJECTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/To-do"
          className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100"
        >
          <div>
            {" "}
            <h2 className="text-2xl font-semibold text-blue-800 mb-2 font-serif">
              To-Do App
            </h2>
            <p className="text-gray-600 text-sm font-serif">
              A simple to-do list web app built using React, Tailwind CSS. Add,
              delete, and manage your daily tasks.
            </p>
          </div>
        </Link>

        <Link
          to="/crud"
          className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 font-serif">
            CRUD Form
          </h2>
          <p className="text-gray-600 text-sm font-serif">
            A form-based app to Create, Read, Update, and Delete user data using
            React with a neat table view.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
