// import React from 'react';
// import { FiBookmark } from 'react-icons/fi';

import { Send, } from "lucide-react";
import Governor from '../assets/DrAlexOtti.png';
import Wisdom from '../assets/wisdom.png';
import Mutual1 from '../assets/Mutuals1.png';
import Mutual3 from '../assets/Mutuals3.png';
import Like from '../assets/Union.png';
import DisLike from '../assets/UnionRed.png';

const PostCard = () => {
	return (
		<div className="w-full mx-auto p-4 bg-white rounded-lg shadow-sm text-[#000] font-sans">
			{/* Header */}
			<div className="flex items-start justify-between mb-3 gap-3">
				<div className="flex items-center min-w-0 gap-3">
					<img
						src={Wisdom}
						alt="Profile"
						className="w-10 h-10 rounded-full object-cover"
					/>
					<div className="min-w-0">
						<p className="font-medium text-sm break-words">WISDOM EZEH</p>
						<p className="text-xs text-gray-500 uppercase">Thursday, 13 May 2025</p>
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

			{/* Content */}
			<div className="mb-4 space-y-3 text-sm break-words ms-0 sm:ms-12 w-full sm:w-[90%]">
				{/* Title */}
				<p className="text-base sm:text-[1.2rem] uppercase font-bold text-[#1a1a1a] mb-2">
					Port Harcourt Road to be commissioned by May 29th as Gov. Otti explains why he operates from private residence
				</p>

				{/* Article Content */}
				<p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">
					FIC Report (Abia State) – Abia State Governor, Dr. Alex Otti says the ongoing reconstruction and expansion of Port Harcourt road, Aba being handled by Julius Berger Construction Company will be completed and ready for commissioning by 29th May this year.
					Governor Otti disclosed this while speaking at the monthly media briefing tagged "Governor Otti Speaks to Abians". He reiterated his administration's commitment to driving massive infrastructural development, saying that his Government is in a hurry to transform all sectors of the State's economy.
				</p>
				<p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">
					"We don't have time. We are in a hurry. So, we have to do so many things at the same time.
					"Before you know, the four years is over and you will be wondering what happened and that's why, even before we were sworn in, we brought Julius Berger to Port Harcourt road and they started the road design.
					"Some people didn't understand what we were doing. They taught we were in a hurry to take over but we were simply trying to maximize time", Gov. Otti explained.
				</p>
				<p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">
					The Governor, who noted that the ongoing expansion of Library Avenue popularly known as (Bank road) will be completed before the end of March, 2025, also noted that work is progressing at various project sites across the State including the recently flagged-off Omenuko bridge. He announced that work will commence at Owaza road in Ukwa West LGA as he would be flagging off the reconstruction of the road by next week.
				</p>
				<p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">
					On Power, Governor Otti said a lot is being done to increase power availability and stability across the State as arrangements are being perfected in that regards.
					On security, the State Chief Executive acknowledged appreciable level of peace and security across the State as a result of proactive measures put in place by the combined security architecture of the State.
				</p>
				<p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">
					While responding to a question on why he has been working from his private home instead of renovating and retrofitting the Government House, Umuahia in Umuahia that was looted and rendered unusable by appointees of the immediate past administration, Governor Otti insisted that his priorities are delivering results to Abians and not where he operates from.
				</p>
			</div>

			{/* Image */}
			<div className="mb-4 border w-full sm:w-[90%] mx-auto border-gray-200 rounded-lg overflow-hidden">
				<img
					src={Governor}
					alt="Governor Alex Otti"
					className="w-full object-cover"
				/>
			</div>

			{/* Reactions */}
			<div className="border-t border-gray-100 pt-3">
				<div className="flex flex-wrap items-center justify-between mb-2 gap-2">
					<div className="flex items-center">
						<div className="flex -space-x-3">
							<img src={Mutual1} alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
							<img src={Mutual3} alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
						</div>
						<span className="text-xs text-gray-500 ml-1">+32</span>
					</div>
					<span className="text-xs text-gray-500 whitespace-nowrap">
						20 Comment on report
					</span>
				</div>

				<div className="flex flex-wrap justify-between gap-3">
					<button className="flex items-center space-x-1 text-sm text-gray-500 border-gray-500 hover:text-blue-500 px-2 py-1 cursor-pointer border-1 rounded-md">
						<span className="text-xs bg-gray-100 px-2 py-1 rounded">102</span>
						<img src={Like} alt="" />
						<span>Like</span>
					</button>
					<button className="flex items-center space-x-1 text-sm text-gray-500 border-gray-500 hover:text-red-500 px-2 py-1 cursor-pointer border-1 rounded-md">
						<span className="text-xs bg-gray-100 px-2 py-1 rounded">40</span>
						<img src={DisLike} alt="" />
						<span>Dislike</span>
					</button>
					<button className="text-sm text-gray-500  cursor-pointer hover:underline hover:text-blue-500">Comment</button>
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
					<button className="bg-[#09B264] p-2 rounded-md">
						<Send className="w-4 h-4 text-white" />
					</button>
				</button>
			</div>
		</div>
	);
};

export default PostCard;