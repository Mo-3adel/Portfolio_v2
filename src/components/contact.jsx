import { useState } from "react";
import axios from "axios";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const FORMSPREE_URL = "https://formspree.io/f/xdkwzavg";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, message: "All fields are required." });
      return;
    }

    try {
      const response = await axios.post(FORMSPREE_URL, formData, {
        headers: { Accept: "application/json" },
      });
      if (response.status === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // clear form
      }
    } catch (error) {
      setStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-violet-400 mb-6">Contact Me</h1>
      <p className="text-gray-400 mb-8 text-center w-3/4 md:w-1/2">
        Have a question or want to work together? Fill out the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-violet-500"
      >

        <label className="block mb-3">
          <span className="text-gray-300">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:border-violet-400 focus:ring focus:ring-violet-400"
            required
          />
        </label>


        <label className="block mb-3">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:border-violet-400 focus:ring focus:ring-violet-400"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-300">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:border-violet-400 focus:ring focus:ring-violet-400"
            required
          ></textarea>
        </label>


        <button
          type="submit"
          className="w-full py-2 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
        >
          Send
        </button>

        {status && (
          <p
            className={`mt-4 text-center ${
              status.success ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPage;
