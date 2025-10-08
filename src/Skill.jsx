import React from 'react';

function Skills() {
  return (
    <div className="bg-blue-50 min-h-screen text-center p-10" >
      <h2 className="text-3xl font-bold mb-6 text-blue-900 font-serif mt-15 underline underline-offset-8 decoration-blue-300 ">SKILLS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-20 text-gray-800 font-serif">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Languages</h3>
          <ul className="leading-relaxed">
            <li>• C</li>
            <li>• Python</li>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• Java</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Tools & Frameworks</h3>
          <ul className="leading-relaxed">
            <li>• React</li>
            <li>• Tailwind CSS</li>
            <li>• Git & GitHub</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Others</h3>
          <ul className="leading-relaxed">
            <li>• Canva</li>
            <li>• Microsoft Excel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
