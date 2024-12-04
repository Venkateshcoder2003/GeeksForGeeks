import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isLoggedIn, userRole, logout }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-green-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">GeeksForGeeks Club</Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/events" className="hover:text-green-200">Events</Link>
                    {isLoggedIn ? (
                        <>
                            {userRole === 'chairman' && (
                                <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
                            )}
                            <button onClick={handleLogout} className="hover:text-green-200">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-green-200">Login</Link>
                            <Link to="/signup" className="hover:text-green-200">Register</Link>
                        </>
                    )}
                    <Link to="/alumni" className="hover:text-green-200">Alumni</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <Link to="/events" className="block hover:text-green-200">Events</Link>
                    {isLoggedIn ? (
                        <>
                            {userRole === 'chairman' && (
                                <Link to="/dashboard" className="block hover:text-green-200">Dashboard</Link>
                            )}
                            <button onClick={handleLogout} className="block w-full text-left hover:text-green-200">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="block hover:text-green-200">Login</Link>
                            <Link to="/signup" className="block hover:text-green-200">Register</Link>
                        </>
                    )}
                    <Link to="/alumni" className="block hover:text-green-200">Alumni</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

