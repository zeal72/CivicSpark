import { useState } from 'react';

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: 'Hi Welcome To Civic Spark Chat Bot. How May I Help You Today?',
			sender: 'bot',
			time: 'TUESDAY, 13 MAY 2025'
		}
	]);

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	const sendMessage = (e) => {
		e.preventDefault();
		if (message.trim() === '') return;

		const newMessage = {
			id: messages.length + 1,
			text: message,
			sender: 'user',
			time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
		};

		setMessages([...messages, newMessage]);
		setMessage('');

		// Simulate bot response
		setTimeout(() => {
			const botResponse = {
				id: messages.length + 2,
				text: "Thanks for your message. Our team will get back to you shortly.",
				sender: 'bot',
				time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
			};
			setMessages(prevMessages => [...prevMessages, botResponse]);
		}, 1000);
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			{/* Chat toggle button */}
			{!isOpen && (
				<button
					onClick={toggleChat}
					className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
				</button>
			)}

			{/* Chat window */}
			{isOpen && (
				<div className="bg-white rounded-lg shadow-xl w-80 flex flex-col border border-gray-200 overflow-hidden">
					{/* Chat header */}
					<div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
						<div className="flex items-center">
							<img src="/api/placeholder/32/32" alt="Civic Spark" className="w-8 h-8 rounded-full mr-2" />
							<div>
								<h3 className="font-medium text-sm">Civic Spark</h3>
								<p className="text-xs text-green-100">Chatbot</p>
							</div>
						</div>
						<button onClick={toggleChat} className="text-white">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
							</svg>
						</button>
					</div>

					{/* Chat messages */}
					<div className="flex-1 p-4 overflow-y-auto h-80 bg-gray-50">
						{messages.map((msg) => (
							<div key={msg.id} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
								<div className={`inline-block rounded-lg px-4 py-2 max-w-xs ${msg.sender === 'user'
									? 'bg-green-500 text-white'
									: 'bg-green-100 text-green-800'
									}`}>
									<p className="text-sm">{msg.text}</p>
								</div>
								<p className="text-xs text-gray-500 mt-1">{msg.time}</p>
							</div>
						))}
					</div>

					{/* Chat input */}
					<form onSubmit={sendMessage} className="border-t border-gray-200 p-2 flex">
						<input
							type="text"
							placeholder="Type a message..."
							className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button
							type="submit"
							className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
							</svg>
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default ChatBot;