'use client';

import { useState } from "react";
import MenuNav from "@/app/components/Menu/MenuNav";
import Header from "@/app/components/Header";

export default function ContactPage() {
      const [rows, setRows] = useState<number>(5);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <MenuNav />
      <Header name="Contact Us" />
      <main className="h-auto bg-gray-50 p-6 my-16">
        <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Get in Touch</h2>
          <p className="text-gray-600 text-center mt-2">We'd love to hear from you!</p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={rows}
                className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ff9f0d] text-white py-2 px-4 rounded-lg hover:bg-[#ff9f5d]"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
