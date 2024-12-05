// import React from 'react';
// import { Calendar, Clock, MapPin } from 'lucide-react';

// const EventCard = ({ event, userRole }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//                 <p className="text-gray-600 mb-4">{event.description}</p>
//                 <div className="flex items-center text-sm text-gray-500 mb-2">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>{new Date(event.date).toLocaleDateString()}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500 mb-2">
//                     <Clock className="w-4 h-4 mr-2" />
//                     <span>{event.time}</span>
//                 </div>
//                 <div className="flex items-center text-sm text-gray-500 mb-4">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     <span>{event.location}</span>
//                 </div>
//                 {userRole === 'chairman' && (
//                     <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//                         Edit Event
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default EventCard;



import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventCard = ({ event, userRole }) => {
    return (
        <div className="card group">
            <div className="relative">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-xl font-semibold text-white mb-2">{event.title}</h2>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <p className="text-gray-600 line-clamp-2">{event.description}</p>

                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{event.time}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>
                </div>

                {userRole === 'chairman' && (
                    <div className="pt-4">
                        <button className="btn-primary w-full flex items-center justify-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>Manage Event</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCard;