import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const defaultImage = "man3.avif";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-background">
        <div className="container mx-auto max-w-6xl bg-white rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-8 mt-6">
          {/* Left Side - Image & Info */}
          <div className="lg:w-1/2 flex flex-col items-center text-center px-4">
            <img
              src={defaultImage}
              alt="Contact Us"
              className="rounded-xl object-cover max-h-96 w-full"
            />
            <h2 className="mt-6 text-3xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="mt-3 text-gray-600 max-w-md">
              We'd love to hear from you! Fill out the form, and we'll get back to you shortly.
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 px-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h3>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full p-3 rounded border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-cyan-400 bg-white text-black`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`w-full p-3 rounded border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-cyan-400 bg-white text-black`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`w-full p-3 rounded border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } focus:outline-cyan-400 bg-white text-black`}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full p-3 rounded border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:outline-cyan-400 bg-white text-black resize-none`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-700 text-white font-semibold rounded transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <p className="mt-6 text-green-600 font-semibold text-center">
                Thank you! We'll be in touch soon.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Contact;
