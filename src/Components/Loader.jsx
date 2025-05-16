import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Civic Spark Loading Component
export default function CivicSparkLoader({ fullscreen = true, message = null }) {
	const [loadingText, setLoadingText] = useState("");
	const [textIndex, setTextIndex] = useState(0);
	const fullText = message || "Loading Civic Spark...";

	useEffect(() => {
		// Reset text index when message changes
		setTextIndex(0);
		setLoadingText("");
	}, [fullText]);

	useEffect(() => {
		if (textIndex < fullText.length) {
			const timer = setTimeout(() => {
				setLoadingText(fullText.substring(0, textIndex + 1));
				setTextIndex(textIndex + 1);
			}, 15);

			return () => clearTimeout(timer);
		}
	}, [textIndex, fullText]);

	return (
		<div className={`${fullscreen ? 'fixed inset-0' : 'relative'} flex flex-col items-center justify-center bg-white z-50 ${fullscreen ? '' : 'h-full min-h-[200px]'}`}>
			{/* Main loader animation */}
			<div className="relative w-20 h-20">
				{/* Outer ring */}
				<div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>

				{/* Spinning segment */}
				<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 animate-spin"></div>

				{/* Inner pulsing circle */}
				<div className="absolute inset-4 rounded-full bg-green-500 opacity-80 animate-pulse"></div>

				{/* Center dot */}
				<div className="absolute inset-9 rounded-full bg-white dark:bg-gray-900"></div>

				{/* Small green dots rotating around */}
				<div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-green-500 rounded-full animate-orbit-1"></div>
				<div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 bg-green-400 rounded-full animate-orbit-2"></div>
			</div>

			{/* Loading text with fade-in effect */}
			<div className="mt-6 text-lg font-medium text-gray-900  opacity-90">
				{loadingText}
				<span className="inline-block animate-pulse ml-0.5">|</span>
			</div>

			{/* City skyline silhouette */}
			{fullscreen && (
				<div className="absolute bottom-0 w-full h-16 overflow-hidden opacity-20">
					<div className="relative h-full max-w-4xl mx-auto">
						<div className="absolute bottom-0 left-0 w-8 h-12 bg-green-700"></div>
						<div className="absolute bottom-0 left-8 w-12 h-16 bg-green-700"></div>
						<div className="absolute bottom-0 left-20 w-10 h-10 bg-green-700"></div>
						<div className="absolute bottom-0 left-30 w-16 h-14 bg-green-700"></div>
						<div className="absolute bottom-0 left-46 w-6 h-8 bg-green-700"></div>
						<div className="absolute bottom-0 left-52 w-14 h-12 bg-green-700"></div>
						<div className="absolute bottom-0 left-66 w-10 h-16 bg-green-700"></div>
						<div className="absolute bottom-0 right-0 w-8 h-12 bg-green-700"></div>
						<div className="absolute bottom-0 right-8 w-12 h-16 bg-green-700"></div>
						<div className="absolute bottom-0 right-20 w-10 h-10 bg-green-700"></div>
						<div className="absolute bottom-0 right-30 w-16 h-14 bg-green-700"></div>
						<div className="absolute bottom-0 right-46 w-6 h-8 bg-green-700"></div>
						<div className="absolute bottom-0 right-52 w-14 h-12 bg-green-700"></div>
						<div className="absolute bottom-0 right-66 w-10 h-16 bg-green-700"></div>
					</div>
				</div>
			)}

			{/* Add custom keyframes for animations */}
			<style>{`
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(3rem) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(3rem) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          0% { transform: rotate(180deg) translateX(3rem) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(3rem) rotate(-540deg); }
        }
        .animate-orbit-1 {
          animation: orbit-1 4s linear infinite;
        }
        .animate-orbit-2 {
          animation: orbit-2 3s linear infinite;
        }
      `}</style>
		</div>
	);
}

CivicSparkLoader.propTypes = {
	fullscreen: PropTypes.bool,
	message: PropTypes.string
};