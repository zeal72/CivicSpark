import React from 'react';

const SidePanel = ({ onNavItemClick, activeTab }) => {
	// Navigation items with their icons and labels
	const navItems = [
		{
			id: 'feed',
			label: 'Feed',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
				</svg>
			)
		},
		{
			id: 'ideabox',
			label: 'Idea Box',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
				</svg>
			)
		},
		{
			id: 'map',
			label: 'Abia State Map',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
				</svg>
			)
		},
		{
			id: 'groups',
			label: 'Groups',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
				</svg>
			)
		},
		{
			id: 'favorites',
			label: 'My Favorites',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
				</svg>
			)
		},
		{
			id: 'settings',
			label: 'Settings',
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
				</svg>
			)
		},
	];

	return (
		<div className="w-60 bg-white h-full overflow-y-auto flex flex-col p-4 shadow-sm">
			{/* User Profile Area */}
			<div className="flex items-center space-x-3 pb-4 mb-4 border-b border-gray-100">
				<div className="w-10 h-10 rounded-full bg-green-100"></div>
				<div>
					<h3 className="font-medium text-sm">User Name</h3>
					<p className="text-xs text-gray-500">View Profile</p>
				</div>
			</div>

			{/* Navigation Menu */}
			<nav className="flex flex-col space-y-2">
				{navItems.map(item => (
					<button
						key={item.id}
						onClick={() => onNavItemClick(item.id)}
						className={`flex items-center space-x-2 p-2 rounded-md text-left transition-colors ${activeTab === item.id
							? 'bg-green-500 text-white'
							: 'text-gray-700 hover:bg-gray-100'
							}`}
					>
						{item.icon}
						<span>{item.label}</span>
					</button>
				))}
			</nav>

			{/* Bottom Actions */}
			<div className="mt-auto pt-4 border-t border-gray-100">
				<button className="flex items-center space-x-2 p-2 rounded-md text-left w-full text-gray-700 hover:bg-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
					</svg>
					<span>Log Out</span>
				</button>
			</div>
		</div>
	);
};

export default SidePanel;