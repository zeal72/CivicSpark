import { X, Send, Mic, Plus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logoname.png";

export default function CivicSparkChatbot({onClose}) {
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

  const handleSend = async () => {
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
	
		try {
			const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
				method: "POST",
				headers: {
					"Authorization": `Bearer ${import.meta.env.VITE_APIKEY}`,
					"Content-Type": "application/json",
					// "HTTP-Referer": "https://your-site.com", // Replace with your actual domain
					"X-Title": "CivicSpark ChatBot", // Optional
				},
				body: JSON.stringify({
					model: "meta-llama/llama-3.3-70b-instruct:free", // Or any model OpenRouter supports
					messages: [
						{
							role: "system",
							content: "You are Civic Spark Chat Bot. You help users learn about Abia State.",
						},
						{
							role: "user",
							content: trimmed,
						},
					],
				}),
			});
	
			const data = await response.json();
	
			const botReply = data?.choices?.[0]?.message?.content || "Sorry, I didn’t get that.";
	
			const botMsg = {
				sender: "bot",
				content: botReply,
				timestamp: new Date().toLocaleTimeString(),
			};
	
			setMessages((prev) => [...prev, botMsg]);
		} catch (error) {
			const errorMsg = {
				sender: "bot",
				content: "Oops! Something went wrong. Please try again.",
				timestamp: new Date().toLocaleTimeString(),
			};
			setMessages((prev) => [...prev, errorMsg]);
			console.error("API Error:", error);
		} finally {
			setIsTyping(false);
		}
	};
	
	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollToBottom();
	}, [messages, isTyping]);

	
  return (
    <div className="h-screen sm:w-[300px] md:w-[340px] shadow-lg bg-white flex flex-col justify-between overflow-hidden fixed right-0 top-0 z-50">
      {/* Topbar */}
      <div className="absolute top-1 right-1 z-50 bg-[#09B264] rounded-lg p-1">
        <button onClick={onClose}>
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
								style={{ whiteSpace: "pre-wrap" }}
                className={`text-sm p-2 rounded-md max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-gray-200 text-black"
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

					<div ref={messagesEndRef} />

        </div>
      </div>

      {/* Input area */}
      <div className="border-t px-2 py-2">
        <div className="flex items-end gap-2">
          <button className="p-1 text-gray-600">
            <Plus className="w-4 h-4" />
          </button>
          <textarea
            rows={3}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault(); // Prevent newline
								handleSend();       // Call your send function
							}
						}}
						placeholder="Ask Civic Bot..."
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
