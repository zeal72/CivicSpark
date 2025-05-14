import React from 'react';

const RightPanel = () => {
	return (
		<div className="w-80 bg-white h-screen border-l border-gray-200 overflow-y-auto">

			{/* You Might Like Section */}
			<div className="p-4 border-b border-gray-100">
				<div className="flex justify-between items-center mb-3">
					<h3 className="font-medium text-sm">You Might Like</h3>
					<a href="#" className="text-blue-500 text-xs">See All</a>
				</div>

				{/* Radio Station Recommendation */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 mb-2">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="w-10 h-10 rounded-full overflow-hidden mr-2 bg-red-100 flex-shrink-0">
								<img src="/api/placeholder/40/40" alt="Magic FM" className="w-full h-full object-cover" />
							</div>
							<div>
								<h4 className="font-medium text-sm">Magic FM</h4>
								<div className="flex items-center">
									<div className="flex -space-x-1">
										<img src="/api/placeholder/16/16" alt="User" className="w-4 h-4 rounded-full border border-white" />
										<img src="/api/placeholder/16/16" alt="User" className="w-4 h-4 rounded-full border border-white" />
									</div>
									<span className="text-xs text-gray-500 ml-1">45 Mutuals</span>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-3 flex justify-between">
						<button className="bg-green-500 text-white px-4 py-1 rounded-md text-xs">Follow</button>
						<button className="bg-gray-100 text-gray-500 px-4 py-1 rounded-md text-xs">Ignore</button>
					</div>
				</div>
			</div>

			{/* Civic Spark Logo */}
			<div className="p-4 bg-white flex justify-center">
				<div className="text-center">
					<img src="/api/placeholder/100/100" alt="Abia State Coat of Arms" className="w-16 h-16 mx-auto mb-2" />
					<div className="font-bold text-xl">
						<span className="text-yellow-500">CIVIC</span>
						<span className="text-red-700"> SPARK</span>
					</div>
					<div className="text-gray-500 font-medium text-sm">CHATBOT</div>
				</div>
			</div>

			{/* Upcoming Events */}
			<div className="p-4 border-t border-b border-gray-100">
				<div className="flex justify-between items-center mb-3">
					<h3 className="font-medium text-sm">Upcoming Events</h3>
					<a href="#" className="text-blue-500 text-xs">See All</a>
				</div>

				{/* Event Card 1 */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-3">
					<div className="flex p-2">
						<div className="bg-blue-500 rounded-lg w-14 h-14 flex items-center justify-center text-white mr-2 flex-shrink-0">
							<div className="text-center">
								<div className="text-xs">ABS</div>
								<div className="font-bold">TECH HUB</div>
								<div className="text-xs">13 MAY 2025</div>
							</div>
						</div>
						<div className="flex-1">
							<h4 className="font-medium text-sm">Launch Your Career Or Grow Your Business With Social Media.</h4>
							<div className="flex justify-between items-center mt-1">
								<div className="flex items-center">
									<div className="flex -space-x-1">
										<img src="/api/placeholder/16/16" alt="User" className="w-4 h-4 rounded-full border border-white" />
										<img src="/api/placeholder/16/16" alt="User" className="w-4 h-4 rounded-full border border-white" />
									</div>
								</div>
								<span className="text-xs text-red-500">182 Joined</span>
							</div>
						</div>
					</div>
				</div>

				{/* Event Card 2 */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-100">
					<div className="flex p-2">
						<div className="bg-blue-500 rounded-lg w-14 h-14 flex items-center justify-center text-white mr-2 flex-shrink-0">
							<div className="text-center">
								<div className="text-xs">ABS</div>
								<div className="font-bold">TECH HUB</div>
								<div className="text-xs">13 MAY 2025</div>
							</div>
						</div>
						<div className="flex-1">
							<h4 className="font-medium text-sm">Launch Your Career Or Grow Your Business With Social Media.</h4>
							<div className="flex justify-between items-center mt-1">
								<div className="flex items-center">
									<div className="flex -space-x-1">
										<img src="/api/placeholder/16/16" alt="User" className="w-4 h-4 rounded-full border border-white" />
										<img src="/api/placeholder/16/16" alt="User" className="w-4 h-4 rounded-full border border-white" />
									</div>
								</div>
								<span className="text-xs text-red-500">183 Joined</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Suggested Groups */}
			<div className="p-4">
				<div className="flex justify-between items-center mb-3">
					<h3 className="font-medium text-sm">Suggested Groups</h3>
					<a href="#" className="text-blue-500 text-xs">See All</a>
				</div>

				{/* Group Card */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="w-10 h-10 rounded-lg overflow-hidden mr-2 bg-green-100 flex items-center justify-center flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</div>
							<div>
								<h4 className="font-medium text-sm">Abia State Technology</h4>
								<p className="text-xs text-gray-500">106k Members</p>
							</div>
						</div>
						<button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				</div>

				{/* Add Chat */}
				<div className="mt-4 border border-gray-200 rounded-lg p-2">
					<div className="flex items-center">
						<span className="text-gray-400 mr-2">+</span>
						<input type="text" placeholder="Add Chat" className="flex-1 text-sm border-none outline-none bg-transparent" />
						<button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightPanel;