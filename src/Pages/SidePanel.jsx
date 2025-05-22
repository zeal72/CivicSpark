import { useState, useEffect } from 'react';
import { auth } from '../../Firebase.config'; // adjust path as needed
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Add this import
import PropTypes from 'prop-types';
import defaultAvatar from '../assets/wisdom.png'; // fallback if no photoURL
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidePanel = ({ onNavItemClick, activeTab, onLogout }) => {
	const [user, setUser] = useState(null);
	const [loggingOut, setLoggingOut] = useState(false);
	const navigate = useNavigate(); // Add this hook

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		try {
			setLoggingOut(true);
			await signOut(auth);

			const toastId = toast.success('You have been logged out successfully.', {
				position: 'top-right',
				autoClose: 2000, // Shorter duration for better UX
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			// Use setTimeout with navigate instead of onClose
			setTimeout(() => {
				toast.dismiss(toastId); // Dismiss the toast
				if (onLogout) {
					onLogout();
				} else {
					navigate('/login', { replace: true }); // Use navigate instead of window.location
				}
			}, 2000);

		} catch (error) {
			console.error('Logout failed:', error);
			toast.error('Logout failed. Please try again.', {
				position: 'top-right',
				autoClose: 3000,
			});
		} finally {
			setLoggingOut(false);
		}
	};

	const navItems = [
		{ id: 'feed', label: 'Feed', icon: <HomeIcon /> },
		{ id: 'ideabox', label: 'Idea Box', icon: <LightningIcon /> },
		{ id: 'map', label: 'Abia State Map', icon: <MapPinIcon /> },
		{ id: 'groups', label: 'Groups', icon: <UsersIcon /> },
		{ id: 'favorites', label: 'My Favorites', icon: <HeartIcon /> },
		{ id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
	];

	return (
		<div className="w-60 bg-white h-full overflow-y-auto flex flex-col p-4 shadow-sm">
			{/* Profile Header */}
			<div className="flex items-center space-x-3 pb-4 mb-4 border-b border-gray-100">
				<div className="w-10 h-10 rounded-full overflow-hidden">
					<img
						src={user?.photoURL ? user.photoURL : defaultAvatar}
						onError={(e) => { e.target.onerror = null; e.target.src = defaultAvatar }}
						alt="User avatar"
						className="w-full h-full object-cover"
					/>
				</div>
				<div>
					<h3 className="font-medium text-sm">
						{user?.displayName || 'Anonymous User'}
					</h3>
					<p className="text-xs text-gray-500 cursor-pointer hover:underline">
						View Profile
					</p>
				</div>
			</div>

			{/* Navigation */}
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

			{/* Logout Button */}
			<div className="mt-auto pt-4 border-t border-gray-100">
				<button
					className="flex items-center space-x-2 p-2 rounded-md text-left w-full text-gray-700 hover:bg-gray-100 transition-colors"
					onClick={handleLogout}
					disabled={loggingOut}
				>
					{loggingOut ? (
						<>
							<svg
								className="animate-spin h-5 w-5 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								/>
							</svg>
							<span>Logging out...</span>
						</>
					) : (
						<>
							<LogoutIcon />
							<span>Logout</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
};

SidePanel.propTypes = {
	onNavItemClick: PropTypes.func.isRequired,
	activeTab: PropTypes.string.isRequired,
	onLogout: PropTypes.func,
};

export default SidePanel;
const HomeIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
	</svg>
);

const LightningIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
			clipRule="evenodd"
		/>
	</svg>
);

const MapPinIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
			clipRule="evenodd"
		/>
	</svg>
);

const UsersIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
	</svg>
);

const HeartIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
			clipRule="evenodd"
		/>
	</svg>
);

const SettingsIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
			clipRule="evenodd"
		/>
	</svg>
);

const LogoutIcon = () => (
	<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M3 4a1 1 0 011-1h6a1 1 0 100-2H4a3 3 0 00-3 3v12a3 3 0 003 3h6a1 1 0 100-2H4a1 1 0 01-1-1V4zm10.293 3.293a1 1 0 011.414 0L19 11l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 12H9a1 1 0 110-2h6.586l-2.293-2.293a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
);