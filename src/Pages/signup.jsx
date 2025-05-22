import { useState } from 'react';
import { auth, provider, db } from '../../Firebase.config';
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	updateProfile
} from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { RiLockPasswordLine, RiMailLine, RiUser3Line, RiBuilding4Line, RiTeamLine, RiImageAddLine, RiCloseLine } from 'react-icons/ri';
import Logo from '../assets/ABSG-Coat-of-Arms_Master 2.png'
import LogoName from '../assets/logoname.png'

// Move InputField outside the component to prevent re-creation on each render
const InputField = ({ icon, type, placeholder, value, onChange, required = false }) => {
	return (
		<div className="relative mb-4">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
				{icon}
			</div>
			<input
				type={type}
				className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-green-200 outline-green-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</div>
	);
};

// Profile Picture Upload Component
const ProfilePictureUpload = ({ onImageUpload, uploadedImageUrl, isUploading }) => {
	const [dragActive, setDragActive] = useState(false);
	const [previewUrl, setPreviewUrl] = useState(uploadedImageUrl || null);

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			handleFileSelect(e.dataTransfer.files[0]);
		}
	};

	const handleFileSelect = (file) => {
		if (file && file.type.startsWith('image/')) {
			// Create preview
			const reader = new FileReader();
			reader.onload = (e) => {
				setPreviewUrl(e.target.result);
			};
			reader.readAsDataURL(file);

			// Upload to Cloudinary
			onImageUpload(file);
		} else {
			toast.error('Please select a valid image file');
		}
	};

	const handleFileInput = (e) => {
		if (e.target.files && e.target.files[0]) {
			handleFileSelect(e.target.files[0]);
		}
	};

	const removeImage = () => {
		setPreviewUrl(null);
		onImageUpload(null);
	};

	return (
		<div className="mb-6">
			<label className="block text-sm font-medium text-gray-700 mb-2">
				Profile Picture (Optional)
			</label>

			{previewUrl ? (
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					className="relative inline-block"
				>
					<div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
						<img
							src={previewUrl}
							alt="Profile preview"
							className="w-full h-full object-cover"
						/>
						{isUploading && (
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
								<svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
									<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
							</div>
						)}
					</div>
					<button
						type="button"
						onClick={removeImage}
						className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
					>
						<RiCloseLine className="w-4 h-4" />
					</button>
				</motion.div>
			) : (
				<div
					className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 cursor-pointer hover:border-green-400 hover:bg-green-50 ${dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'
						}`}
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
					onClick={() => document.getElementById('profile-picture-input').click()}
				>
					<input
						id="profile-picture-input"
						type="file"
						accept="image/*"
						onChange={handleFileInput}
						className="hidden"
					/>

					<motion.div
						animate={{ y: dragActive ? -5 : 0 }}
						transition={{ duration: 0.2 }}
					>
						<RiImageAddLine className="w-12 h-12 text-gray-400 mx-auto mb-3" />
						<p className="text-gray-600 text-sm mb-2">
							Drag & drop your photo here, or click to browse
						</p>
						<p className="text-gray-400 text-xs">
							PNG, JPG, GIF up to 10MB
						</p>
					</motion.div>
				</div>
			)}
		</div>
	);
};

const SignUp = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [organization, setOrganization] = useState('');
	const [group, setGroup] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [profileImageUrl, setProfileImageUrl] = useState('');
	const [loading, setLoading] = useState(false);
	const [imageUploading, setImageUploading] = useState(false);
	const navigate = useNavigate();

	// Cloudinary configuration - Replace with your actual values
	const CLOUDINARY_CLOUD_NAME = "dx1vcdlqs"; // Replace with your cloud name
	const CLOUDINARY_UPLOAD_PRESET = "CivicSpark"; // Replace with your upload preset

	const uploadToCloudinary = async (file) => {
		if (!file) {
			setProfileImageUrl('');
			return null;
		}

		setImageUploading(true);

		try {
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
			formData.append("folder", "profile_pictures"); // Optional: organize in folders

			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
				{
					method: "POST",
					body: formData,
				}
			);

			if (!response.ok) {
				throw new Error('Upload failed');
			}

			const data = await response.json();
			setProfileImageUrl(data.secure_url);
			toast.success('Profile picture uploaded successfully!');
			return data.secure_url;
		} catch (error) {
			console.error('Cloudinary upload error:', error);
			toast.error('Failed to upload image. Please try again.');
			return null;
		} finally {
			setImageUploading(false);
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();

		if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
			toast.error('Please fill in all required fields');
			return;
		}

		setLoading(true);

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;

			// Update profile with display name and photo URL
			await updateProfile(user, {
				displayName: `${firstName} ${lastName}`,
				photoURL: profileImageUrl || null
			});

			// Using Realtime Database instead of Firestore
			await set(ref(db, `users/${user.uid}`), {
				uid: user.uid,
				firstName,
				lastName,
				organization: organization || '',
				group: group || '',
				email: user.email,
				photoURL: profileImageUrl || '',
				provider: 'email',
				createdAt: new Date().toISOString()
			});

			toast.success('Account created successfully!');
			setTimeout(() => navigate('/home'), 1500);
		} catch (error) {
			console.error('Signup error:', error);
			if (error.code === 'auth/email-already-in-use') {
				toast.error('This email is already registered');
			} else {
				toast.error(error.message.replace('Firebase: ', ''));
			}
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleSignUp = async () => {
		setLoading(true);

		try {
			const result = await signInWithPopup(auth, provider);
			const user = result.user;

			const displayName = user.displayName || "Anonymous User";
			const nameParts = displayName.split(' ');
			const firstName = nameParts[0] || '';
			const lastName = nameParts.slice(1).join(' ') || '';

			// Using Realtime Database instead of Firestore
			await set(ref(db, `users/${user.uid}`), {
				uid: user.uid,
				firstName,
				lastName,
				organization: '',
				group: '',
				email: user.email,
				photoURL: user.photoURL || '',
				provider: 'google',
				createdAt: new Date().toISOString()
			});

			toast.success('Google signup successful!');
			setTimeout(() => navigate('/home'), 1500);
		} catch (error) {
			console.error('Google signup error:', error);
			toast.error(error.message.replace('Firebase: ', ''));
		} finally {
			setLoading(false);
		}
	};

	// Create background circles array once to prevent re-creation on each render
	const backgroundCircles = Array(6).fill().map((_, i) => ({
		id: i,
		width: Math.random() * 300 + 50,
		height: Math.random() * 300 + 50,
		top: Math.random() * 100,
		left: Math.random() * 100,
		xMovement: Math.random() * 50 - 25,
		yMovement: Math.random() * 50 - 25,
		duration: Math.random() * 10 + 10
	}));

	return (
		<div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
			style={{
				background: "linear-gradient(135deg, #10b981 0%, #059669 35%, #065f46 100%)"
			}}>
			{/* Animated background shapes */}
			<div className="absolute w-full h-full overflow-hidden z-0">
				{backgroundCircles.map((circle) => (
					<motion.div
						key={circle.id}
						className="absolute rounded-full opacity-20 bg-white"
						style={{
							width: `${circle.width}px`,
							height: `${circle.height}px`,
							top: `${circle.top}%`,
							left: `${circle.left}%`,
						}}
						animate={{
							x: [0, circle.xMovement],
							y: [0, circle.yMovement],
						}}
						transition={{
							repeat: Infinity,
							repeatType: "reverse",
							duration: circle.duration,
						}}
					/>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl z-10"
			>
				<div className="lg:flex">
					{/* Left Side - Branding */}
					<div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-emerald-400 to-green-800 p-12 relative">
						<div className="absolute inset-0 opacity-10">
							<svg viewBox="0 0 100 100" preserveAspectRatio="none">
								<path d="M0,0 L100,0 L100,100 Z" fill="white" />
							</svg>
						</div>

						<div className="relative z-10 h-full flex flex-col">
							<div className="flex items-center space-x-3 mb-8">
								<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
									<span className="text-green-600 font-bold text-xl"><img src={Logo} alt="" /></span>
								</div>
								<h1 className="text-3xl font-bold text-white">
									<img src={LogoName} alt="" />
								</h1>
							</div>

							<div className="flex-grow flex flex-col justify-center">
								<h2 className="text-3xl font-bold text-white mb-6">Join Civic Spark</h2>
								<p className="text-green-100 text-lg mb-12">
									Create an account to connect with your community, report local happenings, and stay informed on important developments.
								</p>

								<div className="mt-8">
									<div className="flex items-center space-x-3 mb-6">
										<div className="bg-green-800 bg-opacity-40 rounded-full p-2">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<p className="text-white">Simple and secure signup</p>
									</div>
									<div className="flex items-center space-x-3 mb-6">
										<div className="bg-green-800 bg-opacity-40 rounded-full p-2">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
										</div>
										<p className="text-white">Join your community</p>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-green-800 bg-opacity-40 rounded-full p-2">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
											</svg>
										</div>
										<p className="text-white">Access civic information</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Form */}
					<div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
							<p className="text-gray-600 mb-8">Fill in your details to get started</p>

							<form onSubmit={handleSignUp} className="space-y-4">
								{/* Profile Picture Upload */}
								<ProfilePictureUpload
									onImageUpload={uploadToCloudinary}
									uploadedImageUrl={profileImageUrl}
									isUploading={imageUploading}
								/>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<InputField
										icon={<RiUser3Line className="w-5 h-5" />}
										type="text"
										placeholder="First Name"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
									/>

									<InputField
										icon={<RiUser3Line className="w-5 h-5" />}
										type="text"
										placeholder="Last Name"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										required
									/>
								</div>

								<InputField
									icon={<RiBuilding4Line className="w-5 h-5" />}
									type="text"
									placeholder="Organization (Optional)"
									value={organization}
									onChange={(e) => setOrganization(e.target.value)}
								/>

								<div className="relative mb-4">
									<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
										<RiTeamLine className="w-5 h-5" />
									</div>
									<select
										className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 transition-all duration-200"
										value={group}
										onChange={(e) => setGroup(e.target.value)}
									>
										<option value="">Select Group/Institution (Optional)</option>
										<option value="government">Government Institution</option>
										<option value="ngo">Non-Governmental Organization</option>
										<option value="education">Educational Institution</option>
										<option value="business">Business</option>
										<option value="community">Community Group</option>
										<option value="other">Other</option>
									</select>
								</div>

								<InputField
									icon={<RiMailLine className="w-5 h-5" />}
									type="email"
									placeholder="Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>

								<InputField
									icon={<RiLockPasswordLine className="w-5 h-5" />}
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>

								<button
									type="submit"
									disabled={loading || imageUploading}
									className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-base px-5 py-3 transition-all duration-300 disabled:opacity-50"
								>
									{loading ? (
										<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
									) : null}
									{loading ? 'Creating Account...' : imageUploading ? 'Uploading Image...' : 'Create Account'}
								</button>
							</form>

							<div className="my-6 relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300"></div>
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">Or continue with</span>
								</div>
							</div>

							<button
								type="button"
								onClick={handleGoogleSignUp}
								disabled={loading}
								className="w-full flex items-center justify-center bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 text-gray-700 font-medium rounded-lg border border-gray-300 text-base px-5 py-3 transition-all duration-300"
							>
								<FcGoogle className="w-6 h-6 mr-2" />
								Sign up with Google
							</button>

							<p className="mt-8 text-center text-gray-600">
								Already have an account?{' '}
								<Link to="/login" className="font-semibold text-green-600 hover:text-green-500">
									Sign in
								</Link>
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>
			<ToastContainer position="top-center" autoClose={3000} />
		</div>
	);
};

export default SignUp;