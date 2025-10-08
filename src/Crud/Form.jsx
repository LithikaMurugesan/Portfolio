import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Table";

function User() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // API fetch on load
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=10")
      .then((res) => res.data)
      .then((result) => {
        const users = result.users;
        const mappedData = users.map((user) => ({
          name: `${user.firstName}`,
          age: user.age.toString(),
        }));
        setData(mappedData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]{1,25}$/;
    const trimmedName = name.trim();

    if (!trimmedName || !nameRegex.test(trimmedName)) {
      alert("Name must be alphabetic.");
      return;
    }

    const ageNumber = parseInt(age);
    if (!age || isNaN(ageNumber) || ageNumber <= 0 || ageNumber >= 70) {
      alert("Age must be a number between 1 and 69.");
      return;
    }

    const newEntry = { name: trimmedName, age: age.toString() };

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = newEntry;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, newEntry]);
    }

    setName("");
    setAge("");
  };

  const handleEdit = (index) => {
    setName(data[index].name);
    setAge(data[index].age);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    if (editIndex === index) {
      setEditIndex(null);
      setName("");
      setAge("");
    }
  };

  const handleCancel = () => {
    setEditIndex(null);
    setName("");
    setAge("");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 ">
      <div className="flex justify-center items-start mt-20">
        <div className="shadow-2xl rounded-2xl bg-white w-full max-w-md p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4 font-serif">
            🧾 User Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[A-Za-z\s]*$/.test(input) && input.length <= 25) {
                  setName(input);
                }
              }}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "" || (Number(val) < 70 && val.length <= 2)) {
                  setAge(val);
                }
              }}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {editIndex !== null ? "Update" : "Submit"}
              </button>

              {editIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-1/2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8">
        <Data data={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default User;
