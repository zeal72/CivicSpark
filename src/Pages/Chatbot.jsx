import { X, Send, Mic, Plus } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logoname.png";

export default function CivicSparkChatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      content:
        "Hi! Welcome To Civic Spark Chat Bot, Ask Me Anything About Abia State.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = {
      sender: "user",
      content: trimmed,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMsg = {
        sender: "bot",
        content: "Thanks for your question. We'll get back to you shortly!",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="h-screen w-[340px] shadow-lg bg-white flex flex-col justify-between overflow-hidden fixed right-0 top-0 z-50">
      {/* Topbar */}
      <div className="absolute top-1 right-1 z-50 bg-[#09B264] rounded-lg p-1">
        <button onClick={() => setIsOpen(false)}>
          <X className="w-7 text-white cursor-pointer" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="pt-16 px-4 overflow-y-auto flex-1 space-y-4">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mt-4">
          <img src={logo} alt="Logo" className="object-contain" />
          <img src={logo2} alt="Logo" className="object-contain mb-2" />
          <p className="text-lg font-bold text-black mt-1">CHATBOT</p>
          <p className="text-xs text-gray-700 mt-8">TUESDAY, 13 MAY 2025</p>
        </div>

        {/* Messages */}
        <div className="space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`text-sm p-2 rounded-md max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-lime-700 text-white"
                    : "bg-[#09B264] text-white"
                }`}
              >
                {msg.content}
              </div>
              <span className="text-[10px] text-gray-500 mt-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span>Civic Bot is typing...</span>
            </div>
          )}
        </div>
      </div>

      {/* Input area */}
      <div className="border-t px-2 py-2">
        <div className="flex items-end gap-2">
          <button className="p-1 text-gray-600">
            <Plus className="w-4 h-4" />
          </button>
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Civic Bot"
            className="flex-1 resize-none px-3 py-2 rounded-md bg-gray-100 text-sm outline-none max-h-[120px]"
          />
          <button className="p-1 text-gray-600">
            <Mic className="w-4 h-4" />
          </button>
          <button onClick={handleSend} className="bg-[#09B264] p-2 rounded-md">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
