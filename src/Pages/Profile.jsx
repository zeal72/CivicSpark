import { useState } from 'react';
import {
	Star,
	MapPin,
	Calendar,
	Award,
	Users,
	Heart,
	MessageSquare,
	Share2,
	Mail,
	Phone,
	Linkedin,
	Twitter,
	Github,
	Target,
	Zap
} from 'lucide-react';
import Avatar from '../assets/wisdom.png';
import Avatar2 from '../assets/FullLogo.png';

const ProfilePage = () => {
	const [activeTab, setActiveTab] = useState('overview');
	const [isFollowing, setIsFollowing] = useState(false);

	const profileData = {
		name: "Sarah Chen",
		title: "Community Engagement Specialist",
		organization: "Oakland Community Development",
		location: "Aba, Abia State",
		joinDate: "January 2023",
		bio: "Passionate about building stronger communities through innovative civic engagement programs. Experienced in grassroots organizing, policy advocacy, and cross-sector partnerships.",
		stats: {
			projects: 24,
			volunteers: 156,
			impact: "2,400+",
			rating: 4.9
		},
		skills: [
			"Community Organizing", "Policy Advocacy", "Program Management",
			"Public Speaking", "Stakeholder Engagement", "Grant Writing"
		],
		recentProjects: [
			{
				title: "Neighborhood Safety Initiative",
				description: "Led community-wide safety assessment and improvement program",
				impact: "300+ residents engaged",
				status: "Completed"
			},
			{
				title: "Youth Leadership Program",
				description: "Mentorship program connecting young leaders with civic opportunities",
				impact: "45 youth participants",
				status: "Ongoing"
			}
		]
	};

	const StatCard = ({ icon: Icon, label, value, color = "blue" }) => (
		<div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">
			<div className="flex items-center justify-between">
				<div className="min-w-0 flex-1">
					<p className="text-gray-600 text-xs sm:text-sm truncate">{label}</p>
					<p className={`text-lg sm:text-xl font-bold text-${color}-600 mt-1`}>{value}</p>
				</div>
				<Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-500 flex-shrink-0 ml-2`} />
			</div>
		</div>
	);

	const ProjectCard = ({ project }) => (
		<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
				<h4 className="font-semibold text-gray-800 text-sm sm:text-base">{project.title}</h4>
				<span className={`px-2 py-1 text-xs rounded-full self-start sm:self-auto ${project.status === 'Completed'
					? 'bg-green-100 text-green-700'
					: 'bg-blue-100 text-blue-700'
					}`}>
					{project.status}
				</span>
			</div>
			<p className="text-gray-600 text-xs sm:text-sm mb-2 leading-relaxed">{project.description}</p>
			<p className="text-blue-600 font-medium text-xs sm:text-sm">{project.impact}</p>
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header Section */}
			<div className="relative">
				<div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-green-400 to-green-600 relative">
					<img
						src={Avatar2}
						alt="CivicSpark Logo"
						className="absolute top-2 right-2 sm:top-4 sm:right-4 h-8 sm:h-10 md:h-12 w-auto opacity-80"
					/>
				</div>

				{/* Profile Image - Responsive positioning */}
				<div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-4 sm:left-6 md:left-8">
					<img
						src={Avatar}
						alt={profileData.name}
						className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-2 sm:border-4 border-white shadow-lg"
					/>
				</div>

				{/* Action Buttons - Responsive positioning and sizing */}
				<div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-4 md:right-8 flex space-x-1 sm:space-x-2">
					<button
						onClick={() => setIsFollowing(!isFollowing)}
						className={`px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${isFollowing
							? 'bg-white text-blue-600 border border-blue-600'
							: 'bg-blue-600 text-white hover:bg-blue-700'
							}`}
					>
						{isFollowing ? 'Following' : 'Follow'}
					</button>
					<button className="bg-white text-gray-600 p-1 sm:p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
						<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
					</button>
					<button className="bg-white text-gray-600 p-1 sm:p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
						<Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
					</button>
				</div>
			</div>

			{/* Profile Info - Responsive spacing */}
			<div className="pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 break-words">{profileData.name}</h1>
				<p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 break-words">{profileData.title}</p>
				<p className="text-gray-500 flex items-center mt-2 text-xs sm:text-sm">
					<MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
					<span className="break-words">{profileData.location}</span>
				</p>
			</div>

			{/* Main Content - Responsive layout */}
			<div className="px-4 sm:px-6 md:px-8 pb-8">
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
					{/* Main Content */}
					<div className="xl:col-span-3 order-2 xl:order-1">
						{/* Stats - Responsive grid */}
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
							<StatCard icon={Target} label="Projects" value={profileData.stats.projects} color="blue" />
							<StatCard icon={Users} label="Volunteers" value={profileData.stats.volunteers} color="green" />
							<StatCard icon={Heart} label="Impact" value={profileData.stats.impact} color="purple" />
							<StatCard icon={Star} label="Rating" value={profileData.stats.rating} color="yellow" />
						</div>

						{/* Tabs - Responsive tabs */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200">
							<div className="flex border-b border-gray-200 overflow-x-auto">
								{['overview', 'projects'].map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`px-4 sm:px-6 py-2 sm:py-3 font-medium capitalize text-sm sm:text-base whitespace-nowrap ${activeTab === tab
											? 'text-blue-600 border-b-2 border-blue-600'
											: 'text-gray-600 hover:text-blue-500'
											}`}
									>
										{tab}
									</button>
								))}
							</div>

							<div className="p-4 sm:p-6">
								{activeTab === 'overview' && (
									<div className="space-y-4 sm:space-y-6">
										<div>
											<h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">About</h3>
											<p className="text-gray-600 leading-relaxed text-sm sm:text-base">{profileData.bio}</p>
										</div>

										<div>
											<h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Skills</h3>
											<div className="flex flex-wrap gap-2">
												{profileData.skills.map((skill, index) => (
													<span
														key={index}
														className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm"
													>
														{skill}
													</span>
												))}
											</div>
										</div>
									</div>
								)}

								{activeTab === 'projects' && (
									<div className="space-y-3 sm:space-y-4">
										<h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Recent Projects</h3>
										{profileData.recentProjects.map((project, index) => (
											<ProjectCard key={index} project={project} />
										))}
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Sidebar - Responsive sidebar */}
					<div className="space-y-4 sm:space-y-6 order-1 xl:order-2">
						{/* Contact */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Contact</h3>
							<div className="space-y-2 sm:space-y-3">
								<div className="flex items-start space-x-2 sm:space-x-3 text-gray-600">
									<Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
									<span className="text-xs sm:text-sm break-all">sarah.chen@email.com</span>
								</div>
								<div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
									<Phone className="w-4 h-4 flex-shrink-0" />
									<span className="text-xs sm:text-sm">(555) 123-4567</span>
								</div>
								<div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
									<Calendar className="w-4 h-4 flex-shrink-0" />
									<span className="text-xs sm:text-sm">Joined {profileData.joinDate}</span>
								</div>
							</div>

							<div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
								<div className="flex space-x-3 sm:space-x-4">
									<Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 cursor-pointer hover:text-blue-700" />
									<Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 cursor-pointer hover:text-blue-500" />
									<Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 cursor-pointer hover:text-gray-800" />
								</div>
							</div>
						</div>

						{/* Recent Activity */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Recent Activity</h3>
							<div className="space-y-2 sm:space-y-3">
								<div className="flex items-start space-x-2 sm:space-x-3">
									<div className="bg-blue-100 p-1 rounded-full flex-shrink-0">
										<Zap className="w-3 h-3 text-blue-600" />
									</div>
									<div className="min-w-0">
										<p className="text-xs sm:text-sm text-gray-800 break-words">Completed Safety Initiative</p>
										<p className="text-xs text-gray-500">2 days ago</p>
									</div>
								</div>
								<div className="flex items-start space-x-2 sm:space-x-3">
									<div className="bg-green-100 p-1 rounded-full flex-shrink-0">
										<Users className="w-3 h-3 text-green-600" />
									</div>
									<div className="min-w-0">
										<p className="text-xs sm:text-sm text-gray-800 break-words">Added 12 new volunteers</p>
										<p className="text-xs text-gray-500">1 week ago</p>
									</div>
								</div>
								<div className="flex items-start space-x-2 sm:space-x-3">
									<div className="bg-purple-100 p-1 rounded-full flex-shrink-0">
										<Award className="w-3 h-3 text-purple-600" />
									</div>
									<div className="min-w-0">
										<p className="text-xs sm:text-sm text-gray-800 break-words">Received Community Award</p>
										<p className="text-xs text-gray-500">2 weeks ago</p>
									</div>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
							<h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Quick Actions</h3>
							<div className="space-y-2">
								<button className="w-full text-left p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center space-x-2">
									<MessageSquare className="w-4 h-4 flex-shrink-0" />
									<span className="text-xs sm:text-sm">Send Message</span>
								</button>
								<button className="w-full text-left p-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors flex items-center space-x-2">
									<Users className="w-4 h-4 flex-shrink-0" />
									<span className="text-xs sm:text-sm">Join Project</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;