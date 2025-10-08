import React from 'react';

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    e.target.reset();
  }

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900 font-serif underline underline-offset-8 decoration-blue-300">
        CONTACT ME
      </h1>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-left font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label className="block text-left font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

