// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Code2, Calendar, Users, Award } from 'lucide-react';

// export default function Home() {
//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Hero Section */}
//             <div className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center">
//                         <Code2 className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4 sm:mb-6" />
//                         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
//                             Welcome to GeeksForGeeks Club
//                         </h1>
//                         <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
//                             Join our community of passionate developers and tech enthusiasts
//                         </p>
//                         <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
//                             <Link
//                                 to="/events"
//                                 className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green-600 transition-colors w-full sm:w-auto text-center text-sm sm:text-base md:text-lg font-medium"
//                             >
//                                 Upcoming Events
//                             </Link>
//                             <Link
//                                 to="/signup"
//                                 className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto text-center text-sm sm:text-base md:text-lg font-medium"
//                             >
//                                 Join Now
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Features Section */}
//             <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//                         <FeatureCard
//                             icon={<Calendar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500 mb-3 sm:mb-4" />}
//                             title="Regular Events"
//                             description="Participate in workshops, hackathons, and tech talks"
//                         />
//                         <FeatureCard
//                             icon={<Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500 mb-3 sm:mb-4" />}
//                             title="Strong Network"
//                             description="Connect with like-minded individuals and industry professionals"
//                         />
//                         <FeatureCard
//                             icon={<Award className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500 mb-3 sm:mb-4" />}
//                             title="Skill Development"
//                             description="Learn new technologies and enhance your coding skills"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function FeatureCard({ icon, title, description }) {
//     return (
//         <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center sm:text-left">
//             <div className="flex justify-center sm:justify-start">{icon}</div>
//             <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
//             <p className="text-sm sm:text-base text-gray-600">{description}</p>
//         </div>
//     );
// }



import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Calendar, Users, Award } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <Code2 className="h-10 w-10 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-6"
                            strokeWidth={1.5} />
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 leading-tight tracking-tight">
                            Welcome to GeeksForGeeks Club
                        </h1>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-8 px-4">
                            Join our community of passionate developers and tech enthusiasts
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                            <Link
                                to="/events"
                                className="inline-flex items-center justify-center bg-green-500 text-white px-4 sm:px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base font-medium shadow-sm hover:shadow-md"
                            >
                                <Calendar className="w-4 h-4 mr-2" />
                                Upcoming Events
                            </Link>
                            <Link
                                to="/signup"
                                className="inline-flex items-center justify-center bg-white text-gray-900 px-4 sm:px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base font-medium shadow-sm hover:shadow-md"
                            >
                                <Users className="w-4 h-4 mr-2" />
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        <FeatureCard
                            icon={<Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />}
                            title="Regular Events"
                            description="Participate in workshops, hackathons, and tech talks to enhance your skills"
                        />
                        <FeatureCard
                            icon={<Users className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />}
                            title="Strong Network"
                            description="Connect with like-minded individuals and industry professionals for growth"
                        />
                        <FeatureCard
                            icon={<Award className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />}
                            title="Skill Development"
                            description="Learn new technologies and enhance your coding skills through hands-on practice"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile-First Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 sm:hidden">
                <div className="flex justify-around items-center">
                    <Link to="/" className="flex flex-col items-center text-green-500">
                        <Code2 className="h-6 w-6" />
                        <span className="text-xs mt-1">Home</span>
                    </Link>
                    <Link to="/events" className="flex flex-col items-center text-gray-600">
                        <Calendar className="h-6 w-6" />
                        <span className="text-xs mt-1">Events</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center text-gray-600">
                        <Users className="h-6 w-6" />
                        <span className="text-xs mt-1">Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col items-center sm:items-start">
                <div className="mb-3 sm:mb-4">{icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}