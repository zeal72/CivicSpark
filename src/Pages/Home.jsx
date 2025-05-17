import { useState, useEffect } from 'react';
import SidePanel from './SidePanel';
import FeedPanel from './Feed';
import RightPanel from './YouMightLike';
import ChatBot from './Chatbot';
// import { MessageCircle } from 'lucide-react';
import Logo from '../assets/FullLogo.png';
import Link from '../assets/Link.png';
import Percentage from '../assets/percentage.png';
import IdeaBox from './IdeaBox';
import Groups from './Groups';
import Favourite from './Favourite';
import Settings from './Settings';
import { Bot } from 'lucide-react';
import Abiamap from './Abiamap';
import CivicSparkLoader from '../Components/Loader';

const MainLayout = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);
	const [showRightPanel, setShowRightPanel] = useState(false);
	const [showChatBot, setShowChatBot] = useState(false);
	const [activeTab, setActiveTab] = useState('feed');
	const [loading, setLoading] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState('');

	const handleLogout = async () => {
		try {
			// 1. Clear authentication state (tokens, user data)
			localStorage.removeItem('authToken');
			localStorage.removeItem('userData');
			sessionStorage.clear();

			// 3. Navigate to login page
			navigate('/login');


			return true; // Indicate successful logout
		} catch (error) {
			console.error('Logout failed:', error);
			return false; // Indicate failed logout
		}
	};


	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 1024;
			setIsMobile(mobile);
			setShowSidebar(!mobile);
			setShowRightPanel(!mobile);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const toggleSidebar = () => {
		setShowSidebar((prev) => !prev);
		if (isMobile) setShowRightPanel(false);
	};

	const toggleRightPanel = () => {
		setShowRightPanel((prev) => !prev);
		if (isMobile) setShowSidebar(false);
	};

	const toggleChatBot = () => setShowChatBot((prev) => !prev);

	const handleNavItemClick = (tab) => {
		if (tab === activeTab) return; // Don't reload if same tab

		// Create friendly names for tabs
		const tabNames = {
			feed: 'Feed',
			ideabox: 'Idea Box',
			map: 'Abia State Map',
			groups: 'Groups',
			favorites: 'My Favorites',
			settings: 'Settings'
		};

		// Set loading message "Switching to [Tab Name]..."
		setLoadingMessage(`Switching to ${tabNames[tab] || tab}...`);
		setLoading(true);

		// Show loader for 2 seconds
		setTimeout(() => {
			setActiveTab(tab);
			setLoading(false);
			if (isMobile) setShowSidebar(false);
		}, 400);
	};

	return (
		<div className="flex flex-col h-screen overflow-hidden bg-gray-50">
			{/* Header */}
			<header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-30 flex items-center justify-between px-4 md:px-8">
				<div className="flex items-center space-x-3">
					{isMobile && (
						<button onClick={toggleSidebar} className="mr-2 p-1">
							{showSidebar ? (
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					)}
					{/* Logo */}
					<img src={Logo} alt="Logo" className="h-10 w-auto" />
				</div>

				<div className="flex items-center gap-2 sm:gap-4">
					<a
						href="https://www.abia.tax/"
						target='_blank'
						className=" hidden lg:flex items-center gap-2 px-3 sm:px-4 py-2 text-white text-sm sm:text-base bg-[#09B264] rounded-md hover:opacity-90 transition"
					>
						<img
							src={Percentage}
							alt="Percentage Icon"
							className="h-5 sm:h-6 w-auto object-contain shrink-0"
						/>
						<span className="whitespace-nowrap">Abia Tax Registration And Information</span>
					</a>

					<a
						href="https://abiastate.gov.ng/mdas/"
						target='_blank'
						className="hidden lg:flex items-center gap-2 px-3 sm:px-4 py-2 text-white text-sm sm:text-base bg-[#09B264] rounded-md hover:opacity-90 transition"
					>
						<img
							src={Link}
							alt="Link icon"
							className="h-5 sm:h-6 w-auto object-contain shrink-0"
						/>
						<span className="whitespace-nowrap">Contacts Of Ministry & Department In Abia State.</span>
					</a>

					{isMobile && (
						<button onClick={toggleRightPanel} className="ml-4 p-1">
							{showRightPanel ? (
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							)}
						</button>
					)}
				</div>
			</header>


			{/* Main Layout */}
			<div className="flex flex-1 mt-16 h-[calc(100vh-4rem)] overflow-hidden relative">
				{/* Sidebar */}
				<div className={`
					${isMobile
						? `${showSidebar ? 'translate-x-0' : '-translate-x-full'} fixed top-16 left-0 bottom-0 z-30 w-60 bg-white transition-transform duration-300 ease-in-out`
						: 'hidden md:block w-60 border-r border-gray-200'
					}`}>
					<SidePanel
						onNavItemClick={handleNavItemClick}
						activeTab={activeTab}
						onLogout={handleLogout}
					/>
				</div>

				{/* Feed Panel (Scrollable) */}
				<div className="flex-1 bg-white overflow-y-auto h-full">
					{loading ? (
						<div className="flex items-center justify-center">
							<CivicSparkLoader fullscreen={false} message={loadingMessage} />
						</div>
					) : (
						<>
							{activeTab === 'feed' && <FeedPanel />}
							{activeTab === 'ideabox' && <IdeaBox />}
							{activeTab === 'map' && <Abiamap />}
							{activeTab === 'groups' && <Groups />}
							{activeTab === 'favorites' && <Favourite />}
							{activeTab === 'settings' && <Settings />}
						</>
					)}
				</div>


				{/* Right Panel */}
				<div className={`
					${isMobile
						? `${showRightPanel ? 'translate-x-0' : 'translate-x-full'} fixed top-16 right-0 bottom-0 z-30 w-80 bg-white transition-transform duration-300 ease-in-out`
						: 'hidden md:block w-80 border-l border-gray-200'
					}`}>
					<RightPanel />
				</div>

				{/* Overlay for mobile panels */}
				{isMobile && (showSidebar || showRightPanel) && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-20"
						onClick={() => {
							setShowSidebar(false);
							setShowRightPanel(false);
						}}
					></div>
				)}
			</div>

			{/* Chat Bot Toggle Button */}
			<button
				onClick={toggleChatBot}
				className="fixed bottom-14 lg:bottom-10 right-3 lg:right-10 z-40 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
			>
				<Bot className="w-7 h-7" />
			</button>

			{/* Chat Bot Panel */}
			{showChatBot && (
				<div className="fixed bottom-0 right-0 z-50">
					<ChatBot onClose={() => setShowChatBot(false)} />
				</div>
			)}
		</div>
	);
};

export default MainLayout;