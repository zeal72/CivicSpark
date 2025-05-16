import { useState, useEffect } from 'react';
import BotImg from '../assets/bot_img.png';
import Logo from '../assets/civic_spark.png';
import { Link } from 'react-router-dom';
// import BgImg from '../assets/background.png'

function CivicSparkLandingPage() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="bg-gradient-to-br from-gray-900 to-green-900 min-h-screen text-white font-sans">
			{/* <div
				className="min-h-screen text-white font-sans bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${BgImg})` }}
			> */}

			{/* Header */}
			<header className=" bg-opacity-20 backdrop-blur-md container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-50">
				<div className="flex items-center space-x-2">
					<img src={Logo} alt="Civic Spark Logo" className="h-10 w-auto" />
					<span className="text-xl font-bold">
						<span className="text-yellow-400">CIVIC</span>{" "}
						<span className="text-red-500">SPARK</span>
					</span>
				</div>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center space-x-10">
					<a href="#about" className="border border-white rounded px-4 py-2 hover:bg-white hover:text-black transition">
						About
					</a>
					<Link to="login" className="border border-white rounded px-4 py-2 hover:bg-white hover:text-black transition">
						Login
					</Link>
					<Link to="signup" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
						Sign up
					</Link>
				</nav>

				{/* Mobile toggle */}
				<div className="md:hidden">
					<button onClick={toggleMobileMenu} className="text-white focus:outline-none">
						{isMobileMenuOpen ? (
							// Close Icon
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						) : (
							// Hamburger Icon
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="4" y1="6" x2="20" y2="6" />
								<line x1="4" y1="12" x2="20" y2="12" />
								<line x1="4" y1="18" x2="20" y2="18" />
							</svg>
						)}
					</button>
				</div>
			</header>

			{/* Slide-in Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 bg-opacity-95 text-white z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
			>
				{/* Close Icon inside the menu */}
				<div className="flex justify-end p-4">
					<button onClick={toggleMobileMenu} className="text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>
				<nav className="flex flex-col items-center space-y-6 mt-10">
					<a
						href="#about"
						onClick={toggleMobileMenu}
						className="border border-white text-white rounded px-6 py-2 hover:bg-white hover:text-black transition"
					>
						About
					</a>
					<Link
						to="login"
						onClick={toggleMobileMenu}
						className="border border-white text-white rounded px-6 py-2 hover:bg-white hover:text-black transition"
					>
						Login
					</Link>
					<Link
						to="signup"
						onClick={toggleMobileMenu}
						className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
					>
						Sign up
					</Link>
				</nav>

			</div>
			{/* Hero Section */}
			<section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between ">
				{/* Text Content */}
				<div className="text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
						Focus On <br /> <span className="text-green-400">Empowerment</span> & <span className="text-green-400">Transparency</span>
					</h1>

					<div className="space-y-2 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row justify-center lg:justify-start mb-6">
						<button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-6 rounded-md transition duration-200">
							Your Voice Sparks
						</button>
						<button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-6 rounded-md transition duration-200">
							Get Connected To What's Happening Now
						</button>
					</div>

					<div className="space-y-2 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row justify-center lg:justify-start">
						<button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-6 rounded-md transition duration-200">
							Report
						</button>
						<button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-6 rounded-md transition duration-200">
							Enhancing Transparency
						</button>
						<button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-3 px-6 rounded-md transition duration-200">
							Empowering Citizens
						</button>
					</div>


					<p className="mt-8 text-lg leading-relaxed text-gray-300 text-center lg:text-left font-serif">
						Civic Spark Is A Government-Customized Social Media Platform Designed To Bring Citizens And Authorities Closer.
						Report Local Happenings, Engage In Constructive Dialogue, And Stay Updated On Important State Developments.
						Experience A New Level Of Transparency And Civic Participation.
					</p>


					<Link to="signup" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 mt-4 rounded-sm  text-center transition duration-200">
						Sign up
					</Link>
				</div>

				{/* Image */}
				<div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
					<img
						src={BotImg}
						alt="Robot Illustration"
						className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md h-auto object-contain"
					/>
				</div>


			</section>



		</div >
	);
}

export default CivicSparkLandingPage;