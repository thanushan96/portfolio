import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your form submission logic here
    try {
      await fetch("https://getform.io/f/29464d2d-88fd-4530-80e0-b061b33c12aa", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Display thank you message
      setSubmitted(true);

      // Rerender the contact form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-400 to-gray-800 p-4 text-black  pb-[25rem] pt-[25rem] sm:pt-[25rem]"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold">
            <span className="border-b-4 border-gray-500 ">Contact</span>
          </p>
          <p className="py-6">
            {submitted
              ? "Thank you for your submission!"
              : "Submit the form below to get in touch with me"}
          </p>
        </div>

        {!submitted && (
          <div className=" flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-[3rem] mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Let's talk
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
