import React, { useRef, useEffect, useState } from "react";

import emailjs from "@emailjs/browser";

export function ContactForm() {
  const emailRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLTextAreaElement>();
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("Jjxdiu3WLdHGCTIoQ"), []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const serviceId = "service_xdrz84m";
    const templateId = "template_r6w1wii";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        message: messageRef.current.value,
        email: emailRef.current.value,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <form
          className="flex flex-col"
          method="POST"
          id="myForm"
          onSubmit={handleSubmit}
        >
          <label className="font-body text-xl mb-1">Email</label>

          <input
            ref={emailRef}
            className="rounded-sm p-2 mb-8"
            placeholder="email"
            type="email"
            name="email"
            id="email"
          />

          <label className="font-body text-xl mb-1">Message</label>
          <textarea
            ref={messageRef}
            className="rounded-sm p-2 mb-8"
            placeholder="message"
            name="message"
            id="message"
            rows={8}
          />
          <input
            type="submit"
            className="bg-secondary-background font-body text-lg p-1 rounded-md sm:w-1/3 lg:w-1/5 text-white text-center hover:bg-background"
            value="Submit"
            disabled={loading}
          />
        </form>
      ) : (
        <h3 className="font-body text-lg text-center p-10">
          Thank you for your email!
        </h3>
      )}
    </>
  );
}
