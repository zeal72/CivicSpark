import { useState } from 'react';

const FeedPanel = () => {
	const [postText, setPostText] = useState('');

	return (
		<div className="w-full bg-gray-50 border-x border-gray-200 h-screen overflow-y-auto pb-16">
			{/* Post Creation Area */}
			<div className="bg-white p-4 mb-4 rounded-lg shadow-sm mx-4 mt-4">
				<div className="flex items-center mb-3">
					<div className="w-8 h-8 rounded-full bg-red-200 mr-2 flex-shrink-0"></div>
					<input
						type="text"
						className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm text-gray-700"
						placeholder="What's Happening Over There ?"
						value={postText}
						onChange={(e) => setPostText(e.target.value)}
					/>
				</div>
				<div className="flex justify-between items-center">
					<div className="flex space-x-4">
						<button className="flex items-center text-gray-500 text-sm">
							<span className="mr-1">📷</span> Photos
						</button>
						<button className="flex items-center text-gray-500 text-sm">
							<span className="mr-1">📹</span> Video
						</button>
						<button className="flex items-center text-gray-500 text-sm">
							<span className="mr-1">🎤</span> Voice
						</button>
					</div>
					<button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm">Post</button>
				</div>
			</div>

			{/* Ministry Post */}
			<div className="bg-white p-4 mb-4 shadow-sm mx-4">
				<div className="flex items-start justify-between mb-2">
					<div className="flex items-center">
						<img src="/api/placeholder/40/40" alt="Ministry Logo" className="w-10 h-10 rounded-lg mr-2" />
						<div>
							<h4 className="font-medium text-sm">Ministry Of Science, Technology & Innovation</h4>
							<p className="text-xs text-gray-500">TUESDAY, 16 MAY 2025</p>
						</div>
					</div>
					<button className="text-green-600">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
					</button>
				</div>
				<div className="mb-4">
					<p className="text-sm font-bold mb-2">the civicconnect hackathon is almost here!</p>
					<p className="text-sm mb-2">this is a first-of-its-kind innovation sprint where brilliant teams of developers, designers, and visionaries from across abia state come together to build real solutions for real civic needs.</p>
					<p className="text-sm mb-2">with ₦1 million up as star prize + the chance to have their solution adopted by the state, it's a showdown of innovation you don't want to miss!</p>
					<p className="text-sm mb-2">from keynote sessions to live pitches, witness the energy, ideas, and ingenuity in action.</p>
					<p className="text-sm mb-2">date: may 16-17, 2025</p>
					<p className="text-sm mb-2">location: igbub, 10 calabar street opposite dr. oghonnaya onu polytechnic, abia state.</p>
					<p className="text-sm mb-2">📌 register to attend: https://forms.office.com/r/cpgsxsdknmu</p>
					<p className="text-sm mb-2">#civicconnecthackathon #abiainnovates</p>
				</div>

				{/* Hackathon Image */}
				<div className="mb-3 border border-gray-200 rounded-lg overflow-hidden">
					<img src="/api/placeholder/400/320" alt="Hackathon Promotion" className="w-full" />
				</div>

				{/* Interaction Section */}
				<div className="border-t border-gray-100 pt-3">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center">
							<div className="flex -space-x-2">
								<img src="/api/placeholder/24/24" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
								<img src="/api/placeholder/24/24" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
							</div>
							<span className="text-xs text-gray-500 ml-1">+32</span>
						</div>
						<span className="text-xs text-gray-500">20 Comment on report</span>
					</div>

					<div className="flex justify-between">
						<button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
							<span className="text-xs bg-gray-100 px-2 py-1 rounded">102</span>
							<span>Like</span>
						</button>
						<button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
							<span className="text-xs bg-gray-100 px-2 py-1 rounded">40</span>
							<span>Dislike</span>
						</button>
						<button className="text-sm text-gray-500">Comment</button>
					</div>
				</div>
			</div>

			{/* Monday Post */}
			<div className="bg-white p-4 mb-4 shadow-sm mx-4">
				<div className="flex items-start justify-between mb-2">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-lg bg-red-500 mr-2 flex items-center justify-center text-white text-xs">
							M
						</div>
						<div>
							<h4 className="font-medium text-sm">MARVELLOUS MONDAY</h4>
							<p className="text-xs text-gray-500">MONDAY, 15 MAY 2025</p>
						</div>
					</div>
					<button className="text-gray-400">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
						</svg>
					</button>
				</div>
				<div className="mb-4">
					<p className="text-sm font-bold mb-2">stop wishing, start winning online. let's build your dream website.</p>
					<p className="text-sm mb-2">is your current website underperforming? are you struggling to attract customers? does your online presence represent your brand online? at [your company name], we don't just design websites - we craft powerful digital experiences that drive real results.</p>
					<p className="text-sm mb-2">we understand that success online comes down to strategy, not just aesthetic appearance. that's why we take a strategic approach, focusing on:</p>
					<ul className="list-disc text-sm pl-6 mb-2">
						<li>understanding your goals: we listen to your vision and objectives to create websites that achieve measurable business outcomes</li>
						<li>user-centric design: we prioritize intuitive navigation, engaging layouts, and seamless functionality to keep your visitors happy and coming back</li>
						<li>cutting-edge technology: we leverage the latest web development trends and technologies to ensure your website is fast, secure, and future-proof</li>
					</ul>
				</div>

				{/* Website Design Image */}
				<div className="mb-3 border border-gray-200 rounded-lg overflow-hidden">
					<img src="/api/placeholder/400/200" alt="Website Design" className="w-full" />
				</div>

				{/* Interaction Section */}
				<div className="border-t border-gray-100 pt-3">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center">
							<div className="flex -space-x-2">
								<img src="/api/placeholder/24/24" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
								<img src="/api/placeholder/24/24" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
							</div>
							<span className="text-xs text-gray-500 ml-1">+22</span>
						</div>
						<span className="text-xs text-gray-500">20 Comment on report</span>
					</div>

					<div className="flex justify-between">
						<button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
							<span className="text-xs bg-gray-100 px-2 py-1 rounded">102</span>
							<span>Like</span>
						</button>
						<button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
							<span className="text-xs bg-gray-100 px-2 py-1 rounded">40</span>
							<span>Dislike</span>
						</button>
						<button className="text-sm text-gray-500">Comment</button>
					</div>
					{/* Post Comment Area */}
					<div className="bg-white border-t pt-4 mt-4 border-gray-200 w-full flex items-center">
						<div className="w-8 h-8 rounded-full bg-red-200 mr-2"></div>
						<input
							type="text"
							className="flex-1 bg-gray-100 rounded-sm outline-0 py-2 px-4 text-sm text-gray-700"
							placeholder="What's Happening Over There ?"
						/>
						<button className="ml-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
							</svg>
						</button>
						<button className="ml-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
			</div>


		</div>
	);
};

export default FeedPanel;