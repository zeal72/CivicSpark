import { useState } from 'react';
import Logo from '../assets/logo.png';
import PostImage from '../assets/post.png';
import Like from '../assets/Union.png';
import DisLike from '../assets/UnionRed.png';
import Mutual1 from '../assets/Mutuals1.png'
import Mutual2 from '../assets/Mutuals2.png'
import Mutual3 from '../assets/Mutuals3.png'

const FeedPanel = () => {
	const [postText, setPostText] = useState('');

	return (
		<div className="w-full bg-gray-50 border-x border-gray-200 h-screen pb-20">
			{/* Post Creation Area */}
			<div className="bg-white p-4 mb-4 rounded-lg shadow-sm mx-2 sm:mx-4 mt-4">
				<div className="flex flex-wrap items-center gap-3 mb-3">
					<div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
						<img src={Logo} alt="" className="w-full h-full object-cover" />
					</div>
					<input
						type="text"
						className="flex-1 min-w-0 bg-gray-100 rounded-lg py-2 px-4 text-sm text-gray-700 break-words"
						placeholder="What's Happening Over There?"
						value={postText}
						onChange={(e) => setPostText(e.target.value)}
					/>
				</div>
				<div className="flex flex-wrap justify-between items-center gap-4">
					<div className="flex gap-4 sm:gap-10 flex-wrap">
						<button className="flex items-center text-gray-500 text-sm whitespace-nowrap">
							<span className="mr-1">📷</span> Photos
						</button>
						<button className="flex items-center text-gray-500 text-sm whitespace-nowrap">
							<span className="mr-1">📹</span> Video
						</button>
						<button className="flex items-center text-gray-500 text-sm whitespace-nowrap">
							<span className="mr-1">🎤</span> Voice
						</button>
					</div>
					<button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm whitespace-nowrap">
						Post
					</button>
				</div>
			</div>

			{/* Ministry Post */}
			<div className="bg-white p-4 mb-20 shadow-sm mx-2 sm:mx-4 rounded-lg">
				<div className="flex items-start justify-between mb-3 gap-3">
					<div className="flex items-center min-w-0 gap-3 sm:gap-2">
						<img
							src="./vite.svg"
							alt="Ministry Logo"
							className="w-10 h-10 rounded-lg flex-shrink-0"
						/>
						<div className="min-w-0">
							<h4 className="font-medium text-sm break-words">
								Ministry Of Science, Technology & Innovation
							</h4>
							<p className="text-xs text-gray-500">TUESDAY, 16 MAY 2025</p>
						</div>
					</div>
					<button className="text-green-600 shrink-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-bookmark"
						>
							<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
						</svg>
					</button>
				</div>

				<div className="mb-4 space-y-3 text-sm break-words ms-0 sm:ms-12 w-full sm:w-[90%]">
					<p className="font-medium text-base sm:text-[1.2rem]">
						The Civic connect Hackathon is almost here!
					</p>
					<p>
						This is a first-of-its-kind innovation sprint where brilliant teams of developers, designers, and visionaries from across Abia State come together to build real solutions for real civic needs.
					</p>
					<p>
						With ₦1 million up as star prize + the chance to have their solution adopted by the state, it's a showdown of innovation you don't want to miss!
					</p>
					<p>Date: May 16–17, 2025</p>
					<p>Location: IGBUB, 10 Calabar Street opposite Dr. Oghonnaya Onu Polytechnic, Abia State.</p>
					<p>📌 Register to attend: https://forms.office.com/r/cpgsxsdknmu</p>
					<p>#civicconnecthackathon #abiainnovates</p>
				</div>

				<div className="mb-4 border w-full sm:w-[90%] mx-auto border-gray-200 rounded-lg overflow-hidden">
					<img src={PostImage} alt="Hackathon Promotion" className="w-full object-cover" />
				</div>

				{/* Interaction Section */}
				<div className="border-t border-gray-100 pt-3">
					<div className="flex flex-wrap items-center justify-between mb-2 gap-2">
						<div className="flex items-center">
							<div className="flex -space-x-3">
								<img src={Mutual1} alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
								<img src={Mutual2} alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
								<img src={Mutual3} alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
							</div>
							<span className="text-xs text-gray-500 ml-1">+32</span>
						</div>
						<span className="text-xs text-gray-500 whitespace-nowrap">
							20 Comment on report
						</span>
					</div>

					<div className="flex flex-wrap justify-between gap-3">
						<button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-500">
							<span className="text-xs bg-gray-100 px-2 py-1 rounded">102</span>
							<img src={Like} alt="" />
							<span>Like</span>
						</button>
						<button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
							<span className="text-xs bg-gray-100 px-2 py-1 rounded">40</span>
							<img src={DisLike} alt="" />
							<span>Dislike</span>
						</button>
						<button className="text-sm text-gray-500">Comment</button>
					</div>
				</div>

				{/* Comment Input */}
				<div className="bg-white border-t pt-4 mt-4 border-gray-200 w-full flex flex-wrap items-center gap-3">
					<div className="w-8 h-8 rounded-full bg-red-200 flex-shrink-0" />
					<input
						type="text"
						className="flex-1 min-w-0 bg-gray-100 rounded-sm outline-none py-2 px-4 text-sm text-gray-700"
						placeholder="What's Happening Over There?"
					/>
					<button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shrink-0">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeedPanel;
