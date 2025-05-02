import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasValidated, setWasValidated] = useState(false);
  const web3key = import.meta.env.VITE_WEB3_KEY;

  const handleSubmit = (e) => {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setWasValidated(true);
    } else {
      setIsSubmitting(true);
    }
  };

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 bg-blue-50 rounded-xl mb-20 shadow-md md:p-10">
      <h2 className="text-center text-2xl font-semibold text-blue-800 mb-6">
        Get In Touch
      </h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className={wasValidated ? "was-validated" : ""}
        onSubmit={handleSubmit}
        noValidate
      >
        {/* ⚠️ Replace this with your actual Web3Forms key */}
        <input type="hidden" name="access_key" value={web3key} />

        <div className="mb-4">
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            pattern="[A-Za-z ]{3,50}"
            required
            className="w-full px-4 py-2 rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Please enter valid name (3-50 characters)"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
          <div className="text-sm text-red-600 hidden">
            Please enter your full name
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            className="w-full px-4 py-2 rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
          />
          <div className="text-sm text-red-600 hidden">
            Please enter a valid email address
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="font-medium text-gray-900 block mb-1"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 234 567 890"
            pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
            required
            className="w-full px-4 py-2 rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
          />
          <div className="text-sm text-red-600 hidden">
            Please enter a valid phone number
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="font-medium text-gray-900 block mb-1"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows="4"
            minLength="10"
            maxLength="500"
            required
            className="w-full px-4 py-2 rounded-md border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
          ></textarea>
          <div className="text-sm text-red-600 hidden">
            Please enter a message (10-500 characters)
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 hover:bg-blue-950 transition-colors duration-300 text-white font-semibold py-2 rounded-lg flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
