"use client";
import Header from "@/components/core/Header";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const payload = {
      full_name: fullName,
      work_email: workEmail,
      message: message,
      agreed_to_terms: true,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }

      await response.json();
      setStatus("success");
      setFullName("");
      setWorkEmail("");
      setMessage("");
    } catch (err : any) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#090909] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl md:text-6xl font-extralight mb-6 text-white tracking-tight">
              Need Assistance? We're Here for You 24/7.
            </h1>
            <div className="w-24 h-1 bg-white/10 rounded-full mx-auto mb-8"></div>
            <p className="text-white/70 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              Feel free to reach out with any inquiries or feedback. We look
              forward to hearing from you!
            </p>
          </div>

          {/* Contact Content Grid */}
          <div className="w-full m-auto max-w-[700px] flex items-center justify-center">
            {/* Contact Form */}
            <div className="w-full p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-light mb-8 text-white">
                Send us a Message
              </h2>
              <form className="w-full space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Enter your work email address"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none transition-colors duration-300 font-light resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                {status === "success" && (
                  <div className="text-green-400 text-center">
                    Your message has been sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="text-red-400 text-center">Error: {error}</div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 rounded-md font-medium text-black bg-white hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
