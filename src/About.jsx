import React from 'react';

function About() {
  return (
    <div className="bg-blue-50 text-center min-h-screen py-20">
     
      <h1 className="text-3xl font-bold mb-8 text-blue-900 font-serif underline underline-offset-8 decoration-blue-300 mt-10">
        ABOUT ME
      </h1>

     
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300">
        <p className="text-lg font-serif text-gray-700 mb-6 leading-relaxed">
          I'm <span className="font-bold text-blue-800">Lithika</span>, a third-year Computer Science and Engineering (CSE) student at <span className="font-medium text-blue-600">Sri Shanmugha College of Engineering Technology (Sankari)</span>.
          I enjoy exploring different areas of technology, particularly web development and programming. 
          Currently, I'm enhancing my skills in <span className="font-semibold text-blue-700">C, Python, HTML, CSS, and JavaScript</span>, and I'm also learning <span className="font-semibold text-blue-700">React</span> to dive deeper into web development.
        </p>

        <p className="text-lg font-serif text-gray-700 leading-relaxed">
          Passionate about continuous learning, I aim to build a career in tech where I can <span className="italic text-blue-700">innovate</span>, <span className="italic text-blue-700">collaborate</span>, and make a <span className="italic text-blue-700">positive impact</span>. 
          Whether it's building websites or solving complex coding problems, I love taking on challenges that help me grow both personally and professionally.
        </p>
      </div>

      
      <div className="mt-10 text-gray-600">
        <p className="text-sm">Explore more about my <span className="text-blue-600 font-medium hover:cursor-pointer">skills</span> and <span className="text-blue-600 font-medium hover:cursor-pointer">projects</span> below!</p>
      </div>
    </div>
  );
}

export default About;

