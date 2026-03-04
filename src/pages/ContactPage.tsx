import { motion } from "motion/react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      // Send email using Formspree (free service)
      const response = await fetch("https://formspree.io/f/mreanqnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Error sending message. Please try emailing directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-24 min-h-screen bg-shift-orange">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
        {/* Left Side: Text */}
        <div className="p-8 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-shift-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] select-none flex items-center justify-center">
            <h2 className="text-[30vw] font-black rotate-90">HELLO</h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <p className="mono-label text-shift-black/60 mb-4 lg:mb-8">06 / CONTACT</p>
            <h1 className="text-4xl lg:text-[8vw] font-black tracking-tighter leading-[0.85] mb-8 lg:mb-12">
              LET'S START<br />A PROJECT.
            </h1>
            <p className="text-lg lg:text-2xl font-medium max-w-md opacity-80 leading-tight">
              I'm always open to discussing new opportunities, creative projects, or architectural visions.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Form & Info */}
        <div className="bg-white p-8 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12 lg:space-y-16"
          >
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-12">
              <div className="border-b border-shift-black pb-4">
                <p className="mono-label mb-2 lg:mb-4 opacity-40">What's your name?</p>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe *" 
                  className="w-full bg-transparent border-none p-0 text-2xl lg:text-3xl font-bold tracking-tight focus:ring-0 placeholder:text-shift-black/10 outline-none"
                />
              </div>
              <div className="border-b border-shift-black pb-4">
                <p className="mono-label mb-2 lg:mb-4 opacity-40">What's your email?</p>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com *" 
                  className="w-full bg-transparent border-none p-0 text-2xl lg:text-3xl font-bold tracking-tight focus:ring-0 placeholder:text-shift-black/10 outline-none"
                />
              </div>
              <div className="border-b border-shift-black pb-4">
                <p className="mono-label mb-2 lg:mb-4 opacity-40">Your message</p>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Hello Nishwanth, I'd like to talk about..." 
                  className="w-full bg-transparent border-none p-0 text-xl lg:text-2xl font-bold tracking-tight focus:ring-0 placeholder:text-shift-black/10 resize-none outline-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded"
                >
                  {statusMessage}
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded"
                >
                  {statusMessage}
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full lg:w-auto px-12 lg:px-16 py-5 lg:py-6 bg-shift-black text-white rounded-full font-mono text-xs lg:text-sm uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Social Links */}
            <div className="pt-12 lg:pt-16 border-t border-shift-black/10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mono-label mb-4 opacity-40">Socials</p>
                <ul className="space-y-2 font-bold text-base lg:text-lg">
                  <li><a href="https://www.linkedin.com/in/nishwanth-dk" target="_blank" rel="noopener noreferrer" className="hover:text-shift-orange transition-colors">LinkedIn</a></li>
                  <li><a href="https://www.behance.net/dknishwanth" target="_blank" rel="noopener noreferrer" className="hover:text-shift-orange transition-colors">Behance</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-shift-orange transition-colors">GitHub</a></li>
                </ul>
              </div>
              <div>
                <p className="mono-label mb-4 opacity-40">Email</p>
                <p className="font-bold text-base lg:text-lg break-all">
                  <a href="mailto:dknishwanth1718@gmail.com" className="hover:text-shift-black transition-colors">dknishwanth1718@gmail.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
