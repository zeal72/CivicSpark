import { useState, useEffect } from 'react';
import SidePanel from './Sidebar';
import FeedPanel from './Feed';
import RightPanel from './YouMightLike';
import ChatBot from './Chatbot';
import { MessageCircle } from 'lucide-react';

const MainLayout = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [showChatBot, setShowChatBot] = useState(false);

	// Check if the screen is mobile
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Initial check
		checkIfMobile();

		// Add resize listener
		window.addEventListener('resize', checkIfMobile);

		// Clean up
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);

	// Toggle menu in mobile view
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const toggleChatBot = () => {
		setShowChatBot(!showChatBot);
	};

	return (
		<div>
			<header className='bg-white shadow-md w-full h-16 flex items-center justify-around px-4'>
				<div>
					Image Logo
				</div>
				<div className='flex gap-4'>
					<div className='bg-green-600 h-10 w-20 rounded-sm'></div>
					<div className='bg-green-600 h-10 w-20 rounded-sm'></div>
				</div>
			</header>
			<div className="flex h-screen bg-gray-100 overflow-hidden">

				{/* Mobile Menu Button */}
				{isMobile && (
					<button
						onClick={toggleMenu}
						className="fixed top-4 right-4 z-50 bg-white p-2 rounded-md shadow-md"
					>
						{showMenu ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				)}

				{/* Left Panel */}
				{(!isMobile || (isMobile && showMenu)) && (
					<div className={`${isMobile ? 'fixed top-0 left-0 z-40 h-full shadow-lg' : ''}`}>
						<SidePanel />
					</div>
				)}

				{/* Middle Panel */}
				<div className="flex-1 h-screen overflow-y-auto">
					<FeedPanel />
				</div>

				{/* Right Panel */}
				{(!isMobile || (isMobile && showMenu)) && (
					<div className={`${isMobile ? 'fixed top-0 right-0 z-40 h-full shadow-lg' : ''}`}>
						<RightPanel />
					</div>
				)}

				{/* Chat Bot Toggle Button */}
				<button
					onClick={toggleChatBot}
					className="fixed bottom-6 right-6 cursor-pointer z-40 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
				>
					<MessageCircle className="w-7 h-7" />
				</button>

				{/* Chat Bot Panel */}
				{showChatBot && (
					<div className="fixed bottom-0 right-0 z-50">
						<ChatBot onClose={toggleChatBot} />
					</div>
				)}
			</div>
		</div>
	);
};

export default MainLayout;