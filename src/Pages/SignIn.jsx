import { useState } from 'react';
import { auth, provider } from '../../Firebase.config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { RiLockPasswordLine, RiMailLine } from 'react-icons/ri';
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
				className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-green-200 rounded-lg outline-green-300 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</div>
	);
};

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleEmailLogin = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success('Login successful! Welcome back!');
			setTimeout(() => navigate('/home'), 1500);
		} catch (error) {
			console.error('Login error:', error);
			toast.error(error.message.replace('Firebase: ', ''));
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleLogin = async () => {
		setLoading(true);

		try {
			await signInWithPopup(auth, provider);
			toast.success('Google login successful!');
			setTimeout(() => navigate('/home'), 1500);
		} catch (error) {
			console.error('Google login error:', error);
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
								<h2 className="text-3xl font-bold text-white mb-6">Welcome back!</h2>
								<p className="text-blue-100 text-lg mb-12">
									Log in to connect with your community, report local issues, and stay informed on important developments.
								</p>

								<div className="mt-8">
									<div className="flex items-center space-x-3 mb-6">
										<div className="bg-green-800 bg-opacity-40 rounded-full p-2">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-white">Connect with your community</p>
									</div>
									<div className="flex items-center space-x-3 mb-6">
										<div className="bg-green-800 bg-opacity-40 rounded-full p-2">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-white">Report local happenings</p>
									</div>
									<div className="flex items-center space-x-3">
										<div className="bg-green-800 bg-opacity-40 rounded-full p-2">
											<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
										</div>
										<p className="text-white">Stay informed on developments</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side - Form */}
					<div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
						<h2 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h2>
						<p className="text-gray-600 mb-8">Please sign in to continue to Civic Spark</p>

						<form onSubmit={handleEmailLogin} className="space-y-4">
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

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
									/>
									<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a href="#" className="font-medium text-green-600 hover:text-green-500">
										Forgot password?
									</a>
								</div>
							</div>

							<button
								type="submit"
								disabled={loading}
								className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-base px-5 py-3 transition-all duration-300"
							>
								{loading ? (
									<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
										<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
								) : null}
								{loading ? 'Signing in...' : 'Sign In'}
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
							onClick={handleGoogleLogin}
							disabled={loading}
							className="w-full flex items-center justify-center bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 text-gray-700 font-medium rounded-lg border border-gray-300 text-base px-5 py-3 transition-all duration-300"
						>
							<FcGoogle className="w-6 h-6 mr-2" />
							Sign in with Google
						</button>

						<p className="mt-8 text-center text-gray-600">
							Don't have an account?{' '}
							<Link to="/signup" className="font-semibold text-green-600 hover:text-green-500">
								Create an account
							</Link>
						</p>
					</div>
				</div>
			</motion.div>
			<ToastContainer position="top-center" autoClose={3000} />
		</div>
	);
};

export default Login;