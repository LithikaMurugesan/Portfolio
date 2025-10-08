import React from 'react'

function Data({ data, onEdit, onDelete }) {
    return (
      <div className="m-10">
        <h2 className="font-serif text-lg font-bold text-center pb-5">STORAGE</h2>
        {data?.length === 0 ? (
          <p className="text-center text-gray-500">No entries yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-blue-300">
                <th className="border p-2">Name</th>
                <th className="border p-2">Age</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2 text-center">{item.name}</td>
                  <td className="border p-2 text-center">{item.age}</td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => onEdit(index)}
                      className="bg-green-500 text-white px-2 py-1 mr-2 rounded hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default Data;
  