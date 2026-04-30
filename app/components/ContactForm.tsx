
 
import { FaUser, FaEnvelope, FaRegCommentDots, FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6 w-full max-w-lg mx-auto bg-[#fefae0]   p-8 rounded-2xl shadow-xl border border-[#e0e7ef] dark:border-[#7a332a]">
      <div className="relative">
        <input type="text" placeholder="Your Name" className="pl-12 pr-4 py-3 rounded-lg border dark:text-[#9f9c97]  text-base focus:outline-none focus:ring-2   dark:bg-[#fefae0] dark:border-[#7a332a]  w-full" />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60 text-[#bfa76a] text-lg">
          <FaUser />
        </span>
      </div>
      <div className="relative">
        <input type="email" placeholder="Your Email" className="pl-12 pr-4 py-3 rounded-lg border text-base focus:outline-none focus:ring-2 focus:ring-[#bfa76a] dark:bg-[#fefae0] dark:border-[#7a332a] dark:text-[#9f9c97] w-full" />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60 text-[#bfa76a] text-lg">
          <FaEnvelope />
        </span>
      </div>
      <div className="relative">
        <textarea placeholder="Message" className="pl-12 pr-4 py-3 rounded-lg border dark:text-[#9f9c97]  text-base focus:outline-none focus:ring-2 focus:ring-[#bfa76a] dark:bg-[#fefae0] dark:border-[#7a332a]  min-h-[100px] w-full" />
        <span className="absolute left-4 top-4 opacity-60 text-[#bfa76a] text-lg">
          <FaRegCommentDots />
        </span>
      </div>
      <button type="submit" className="rounded-lg bg-[#bfa76a] px-6 py-3 text-white font-semibold shadow hover:bg-[#a68a4d] transition-colors dark:bg-[#7c6f57] dark:text-[#9f9c97] dark:hover:bg-[#bfa76a] flex items-center gap-2 justify-center">
        <FaPaperPlane className="opacity-80 text-lg" />
        Send Message
      </button>
    </form>
  );
}
