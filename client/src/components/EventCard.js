import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({ event, userRole }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                </div>
                {userRole === 'chairman' && (
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Edit Event
                    </button>
                )}
            </div>
        </div>
    );
};

export default EventCard;

