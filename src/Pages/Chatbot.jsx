import { Menu, Send, Mic, Plus } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png"
import logo2 from "../assets/logoname.png"

export default function CivicSparkChatbot() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-[340px] border-r bg-white flex flex-col justify-between overflow-hidden">
      {/* Topbar */}
      <div className="flex items-center justify-end px-4 pt-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Logo and Title */}
      <div className="flex flex-col items-center mt-4">
        <img
          src={logo}
          alt="Logo"
          className="object-contain"
        />
        <img
          src={logo2}
          alt="Logo"
          className="object-contain mb-2"
        />        
        <p className="text-lg font-bold text-black mt-1">CHATBOT</p>
        <p className="text-xs text-gray-700 mt-8">TUESDAY, 13 MAY 2025</p>
      </div>

      {/* Message bubble + Hello button */}
      <div className="mt-8 px-4 space-y-4">
        <div className="bg-[#09B264] text-white text-sm p-3 rounded-md w-fit max-w-[200px]">
          Hi! Welcome To Civic Spark Chat Bot, Ask Me Anything About Abia State.
        </div>
        <div className="text-right">
          <button className="bg-[#09B264] text-white px-4 py-1 rounded-md text-sm">
            Hello
          </button>
        </div>
      </div>

      {/* Input area */}
      <div className="mt-auto border-t px-2 py-2">
        <div className="flex items-center gap-2">
          <button className="p-1 text-gray-600">
            <Plus className="w-4 h-4" />
          </button>
          <input
            type="text"
            placeholder="Ask Civic Bot"
            className="flex-1 px-3 py-2 rounded-md bg-gray-100 text-sm outline-none"
          />
          <button className="p-1 text-gray-600">
            <Mic className="w-4 h-4" />
          </button>
          <button className="bg-[#09B264] p-2 rounded-md">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
