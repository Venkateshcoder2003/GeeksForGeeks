import React from 'react';
import AlumniCard from '../components/AlumniCard';

const alumniData = [
    {
        name: "Sarah Johnson",
        passingYear: "2022",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
        role: "Software Engineer",
        company: "Google",
        linkedin: "https://linkedin.com/in/sarah-johnson",
        github: "https://github.com/sarahj",
        achievements: [
            "Led the college coding team",
            "Won national hackathon 2022",
            "Published research paper on ML"
        ]
    },
    {
        name: "Michael Chen",
        passingYear: "2021",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500",
        role: "Data Scientist",
        company: "Microsoft",
        linkedin: "https://linkedin.com/in/michael-chen",
        github: "https://github.com/michaelc",
        achievements: [
            "Developed AI-based college project",
            "3 research publications",
            "Best outgoing student award"
        ]
    },
    {
        name: "Priya Patel",
        passingYear: "2020",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500",
        role: "Product Manager",
        company: "Amazon",
        linkedin: "https://linkedin.com/in/priya-patel",
        achievements: [
            "Started tech community in college",
            "Organized 10+ technical workshops",
            "Mentored 50+ juniors"
        ]
    }
];

const Alumni = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Our Distinguished Alumni
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet our successful graduates who are making their mark in the tech industry
                        and inspiring the next generation of developers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {alumniData.map((alumni, index) => (
                        <AlumniCard key={index} {...alumni} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alumni;