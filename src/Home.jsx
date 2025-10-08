import React from "react";
function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0">
        <img
          src="/croped.jpg"
          alt="Lithika"
          className="rounded-full w-60 h-75 object-cover shadow-lg border-4 border-blue-800 transition-transform duration-300 hover:scale-105 hover:border-blue-900"
        />
      </div>
      <div className="w-full sm:w-2/3 pl-0 sm:pl-10">
        <h3 className="text-2xl sm:text-3xl font-bold m-4 font-serif text-blue-800 mt-20">
          <span className="mt-30 p-2">Portfolio</span>
        </h3>
        <h1 className="text-2xl sm:text-3xl font-bold m-4 font-serif text-blue-900 ">
          Lithika Murugesan{" "}
          <span className="text-lg sm:text-xl mt-15">
            B.E.CSE (III-rd year)
          </span>
        </h1>

        <p className="text-base sm:text-lg m-6 font-serif text-gray-700">
          I believe that technology has the power to transform the world for the
          better. As I continue to explore new technologies, I aim to build a
          career where I can innovate, collaborate, and contribute to the
          development of impactful products. I'm always eager to work on
          projects that challenge me to grow as a developer and make a
          meaningful impact.
        </p>
      </div>
    </div>
  );
}

export default Home;
