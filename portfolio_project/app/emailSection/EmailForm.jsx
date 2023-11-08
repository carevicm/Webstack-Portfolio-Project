import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xrgwdrrj");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setShowModal(true);
      setEmail("");
      setSubject("");
      setMessage("");
      timer = setTimeout(() => {
        setShowModal(false);
      }, 2000); //
    }
    return () => clearTimeout(timer);
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-start transition-opacity duration-500"
          style={{ animation: "fadeIn 1s", paddingTop: "25%" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-2xl shadow-xl text-center transition-all duration-500"
            style={{ animation: "scaleIn 1s" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-black font-semibold">
              Thank you for your message!
            </p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className="col-span-3 w-full h-auto lg:p-2"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-[#f3f4f6] text-sm rounded-lg block w-full p-2.5"
            placeholder="youremail@google.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-[#f3f4f6] text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-[#f3f4f6] text-sm rounded-lg block resize-none w-full h-64 p-2.5"
            placeholder="Let's talk about..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-gradient-to-r from-[#8b5cf6] hover:from-[#7c3aed] to-[#d946ef] hover:to-[#c026d3] text-white font-medium p-2 py-2.5 px-5 rounded-3xl w-full"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default EmailForm;
