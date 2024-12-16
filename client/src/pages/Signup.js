// import React, { useState } from 'react';
// import {
//     User,
//     Mail,
//     Lock,
//     Users,
//     Phone,
//     EyeOff,
//     Eye
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'member',
//         phone: '',
//     });

//     const [showPassword, setShowPassword] = useState(false);

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5000/api/auth/signup", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.message || 'Signup failed');
//             }

//             toast.success('Signup successful! Please login.');
//             navigate('/login');
//         } catch (error) {
//             toast.error(error.message || 'Signup failed');
//         }
//     };

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 duration: 0.5,
//                 when: 'beforeChildren',
//                 staggerChildren: 0.1,
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center p-4">
//             <ToastContainer />
//             <motion.div
//                 className="w-full max-w-md"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//             >
//                 <div className="backdrop-blur-lg bg-white/90 rounded-2xl shadow-2xl p-8 space-y-8 transform hover:scale-[1.01] transition-all duration-300">
//                     {/* Title Section */}
//                     <motion.div
//                         className="text-center"
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
//                             Join GeeksForGeeks Club
//                         </h2>
//                         <p className="mt-2 text-base text-gray-600">
//                             Create your account and be part of our community
//                         </p>
//                     </motion.div>

//                     {/* Icons */}
//                     <div className="flex justify-center mb-8">
//                         <Users className="h-16 w-16 text-green-500" />
//                     </div>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Name Field */}
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Full Name
//                             </label>
//                             <div className="relative group">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <User className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
//                                 </div>
//                                 <input
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     required
//                                     className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
//                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
//                     group-hover:border-green-400 transition-all duration-200
//                     bg-white/50 backdrop-blur-sm"
//                                     placeholder="Enter your full name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>

//                         {/* Email Field */}
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Email
//                             </label>
//                             <div className="relative group">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Mail className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
//                                 </div>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
//                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
//                     group-hover:border-green-400 transition-all duration-200
//                     bg-white/50 backdrop-blur-sm"
//                                     placeholder="Enter your email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>

//                         {/* Password Field */}
//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Password
//                             </label>
//                             <div className="relative group">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Lock className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
//                                 </div>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type={showPassword ? 'text' : 'password'}
//                                     required
//                                     className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
//                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
//                     group-hover:border-green-400 transition-all duration-200
//                     bg-white/50 backdrop-blur-sm"
//                                     placeholder="Enter your password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                 />
//                                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="focus:outline-none"
//                                     >
//                                         {showPassword ? (
//                                             <EyeOff className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-200" />
//                                         ) : (
//                                             <Eye className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-200" />
//                                         )}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Phone Field */}
//                         <div>
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Phone Number
//                             </label>
//                             <div className="relative group">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Phone className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
//                                 </div>
//                                 <input
//                                     id="phone"
//                                     name="phone"
//                                     type="tel"
//                                     required
//                                     className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
//                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
//                     group-hover:border-green-400 transition-all duration-200
//                     bg-white/50 backdrop-blur-sm"
//                                     placeholder="Enter your phone number"
//                                     value={formData.phone}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                         </div>

//                         {/* Role Selection */}
//                         <div>
//                             <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Role
//                             </label>
//                             <div className="relative group">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Users className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
//                                 </div>
//                                 <select
//                                     id="role"
//                                     name="role"
//                                     required
//                                     className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
//                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
//                     group-hover:border-green-400 transition-all duration-200
//                     bg-white/50 backdrop-blur-sm"
//                                     value={formData.role}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option value="member">Member</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="w-full py-3 rounded-lg font-medium 
//                 bg-gradient-to-r from-green-600 to-blue-600 text-white 
//                 hover:from-green-700 hover:to-blue-700 
//                 transition-all duration-200 transform hover:translate-y-[-2px]"
//                         >
//                             Sign Up
//                         </button>

//                         {/* Login Link */}
//                         <div className="text-center">
//                             <button
//                                 type="button"
//                                 onClick={() => navigate('/login')}
//                                 className="text-green-600 hover:text-green-700 transition-colors duration-200"
//                             >
//                                 Already have an account? Login here
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import { User, Mail, Lock, Users, Phone, EyeOff, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ADMIN_CREDENTIALS = [
    {
        name: "Venkatesh M",
        email: "venkateshvenki77644@gmail.com",
        mobile: "7204877644"
    },
    {
        name: "Akshitha Katte",
        email: "akshithakatte@gmail.com",
        mobile: "9632469914"
    },
    {
        name: "Raghavi M",
        email: "raghaviiiiim@gmail.com",
        mobile: "7899123195"
    }
];

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'member',
        phone: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Check if the user is trying to sign up as a chairman
            if (formData.role === 'chairman') {
                // Validate chairman credentials
                const isAuthorizedAdmin = ADMIN_CREDENTIALS.some(admin =>
                    admin.name === formData.name &&
                    admin.email === formData.email &&
                    admin.mobile === formData.phone
                );

                if (!isAuthorizedAdmin) {
                    throw new Error('You are not authorized to sign up as a chairman.');
                }
            }

            const response = await axios.post("http://localhost:5000/api/auth/signup", formData);

            if (response.status === 201) {
                toast.success('Signup successful! Please login.');
                navigate('/login');
            } else {
                throw new Error(response.data.message || 'Signup failed');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || 'Signup failed');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center p-4">
            <ToastContainer />
            <motion.div
                className="w-full max-w-md"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="backdrop-blur-lg bg-white/90 rounded-2xl shadow-2xl p-8 space-y-8 transform hover:scale-[1.01] transition-all duration-300">
                    {/* Title Section */}
                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Join GeeksForGeeks Club
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Create your account and be part of our community
                        </p>
                    </motion.div>

                    {/* Icons */}
                    <div className="flex justify-center mb-8">
                        <Users className="h-16 w-16 text-green-500" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="focus:outline-none"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-200" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-200" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                Role
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                </div>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                    group-hover:border-green-400 transition-all duration-200
                    bg-white/50 backdrop-blur-sm"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                >
                                    <option value="member">Member</option>
                                    <option value="chairman" disabled={!ADMIN_CREDENTIALS.some(admin => admin.email === formData.email)}>
                                        Chairman
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg font-medium 
                bg-gradient-to-r from-green-600 to-blue-600 text-white 
                hover:from-green-700 hover:to-blue-700 
                transition-all duration-200 transform hover:translate-y-[-2px]"
                        >
                            Sign Up
                        </button>

                        {/* Login Link */}
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="text-green-600 hover:text-green-700 transition-colors duration-200"
                            >
                                Already have an account? Login here
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;

