// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// const Dashboard = () => {
//     const [events, setEvents] = useState([]);
//     const [newEvent, setNewEvent] = useState({
//         title: '',
//         description: '',
//         date: '',
//         time: '',
//         location: '',
//         image: '',
//     });

//     useEffect(() => {
//         fetchEvents();
//     }, []);


//     const fetchEvents = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/events');
//             setEvents(response.data);
//         } catch (error) {
//             toast.error('Failed to fetch events');
//         }
//     };

//     const handleInputChange = (e) => {
//         setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/events', newEvent, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//             });
//             toast.success('Event created successfully');
//             setNewEvent({
//                 title: '',
//                 description: '',
//                 date: '',
//                 time: '',
//                 location: '',
//                 image: '',
//             });
//             fetchEvents();
//         } catch (error) {
//             toast.error('Failed to create event');
//         }
//     };

//     const handleDeleteEvent = async (eventId) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/events/${eventId}`, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//             });
//             toast.success('Event deleted successfully');
//             setEvents(events.filter(event => event._id !== eventId));
//         } catch (error) {
//             toast.error('Failed to delete event');
//         }
//     };


//     const inputClasses = "w-full px-3 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500";

//     return (
//         <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6 sm:py-8">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Chairman Dashboard</h1>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                     {/* Create Event Form */}
//                     <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
//                         <h2 className="text-xl sm:text-2xl font-semibold mb-4">Create New Event</h2>
//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={newEvent.title}
//                                 onChange={handleInputChange}
//                                 placeholder="Event Title"
//                                 className={inputClasses}
//                                 required
//                             />
//                             <textarea
//                                 name="description"
//                                 value={newEvent.description}
//                                 onChange={handleInputChange}
//                                 placeholder="Event Description"
//                                 className={`${inputClasses} h-24 resize-none`}
//                                 required
//                             />
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 <input
//                                     type="date"
//                                     name="date"
//                                     value={newEvent.date}
//                                     onChange={handleInputChange}
//                                     className={inputClasses}
//                                     required
//                                 />
//                                 <input
//                                     type="time"
//                                     name="time"
//                                     value={newEvent.time}
//                                     onChange={handleInputChange}
//                                     className={inputClasses}
//                                     required
//                                 />
//                             </div>
//                             <input
//                                 type="text"
//                                 name="location"
//                                 value={newEvent.location}
//                                 onChange={handleInputChange}
//                                 placeholder="Event Location"
//                                 className={inputClasses}
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="image"
//                                 value={newEvent.image}
//                                 onChange={handleInputChange}
//                                 placeholder="Image URL"
//                                 className={inputClasses}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full sm:w-auto px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base font-medium"
//                             >
//                                 Create Event
//                             </button>
//                         </form>
//                     </div>

//                     {/* Events List */}
//                     <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
//                         <h2 className="text-xl sm:text-2xl font-semibold mb-4">Manage Events</h2>
//                         <div className="space-y-4 overflow-y-auto max-h-[600px]">
//                             {events.map((event) => (
//                                 <div key={event._id} className="bg-gray-50 p-4 rounded-lg">
//                                     <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
//                                     <p className="text-sm sm:text-base text-gray-600 mt-1">{event.description}</p>
//                                     <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
//                                         <span>{new Date(event.date).toLocaleDateString()}</span>
//                                         <span>at {event.time}</span>
//                                         <span>• {event.location}</span>
//                                     </div>
//                                     <button
//                                         className="mt-3 px-4 py-1.5 bg-red-500 text-white text-xs sm:text-sm rounded-md hover:bg-red-600 transition-colors"
//                                         onClick={() => handleDeleteEvent(event._id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [events, setEvents] = useState([]);
    const [recruitmentUrl, setRecruitmentUrl] = useState('');
    const [currentRecruitmentUrl, setCurrentRecruitmentUrl] = useState('');
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        image: '',
    });

    useEffect(() => {
        fetchEvents();
        fetchRecruitmentUrl();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/events');
            setEvents(response.data);
        } catch (error) {
            toast.error('Failed to fetch events');
        }
    };

    const fetchRecruitmentUrl = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/recruitment-url');
            setCurrentRecruitmentUrl(response.data.url);
        } catch (error) {
            toast.error('Failed to fetch recruitment URL');
        }
    };

    const handleRecruitmentUrlSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/recruitment-url',
                { url: recruitmentUrl },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            toast.success('Recruitment URL updated successfully');
            setCurrentRecruitmentUrl(recruitmentUrl);
            setRecruitmentUrl('');
        } catch (error) {
            toast.error('Failed to update recruitment URL');
        }
    };

    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/events', newEvent, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Event created successfully');
            setNewEvent({
                title: '',
                description: '',
                date: '',
                time: '',
                location: '',
                image: '',
            });
            fetchEvents();
        } catch (error) {
            toast.error('Failed to create event');
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`http://localhost:5000/api/events/${eventId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            toast.success('Event deleted successfully');
            setEvents(events.filter(event => event._id !== eventId));
        } catch (error) {
            toast.error('Failed to delete event');
        }
    };

    const inputClasses = "w-full px-3 py-2 sm:py-3 border rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500";

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Chairman Dashboard</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Recruitment Form URL Section */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Recruitment Form Management</h2>
                        <div className="mb-4">
                            {currentRecruitmentUrl && (
                                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                                    <h3 className="font-medium mb-2">Current Recruitment Form URL:</h3>
                                    <a
                                        href={currentRecruitmentUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-600 break-all"
                                    >
                                        {currentRecruitmentUrl}
                                    </a>
                                </div>
                            )}
                            <form onSubmit={handleRecruitmentUrlSubmit} className="space-y-4">
                                <input
                                    type="url"
                                    value={recruitmentUrl}
                                    onChange={(e) => setRecruitmentUrl(e.target.value)}
                                    placeholder="Enter Google Form URL"
                                    className={inputClasses}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base font-medium"
                                >
                                    Update Recruitment Form URL
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Create Event Form */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Create New Event</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="title"
                                value={newEvent.title}
                                onChange={handleInputChange}
                                placeholder="Event Title"
                                className={inputClasses}
                                required
                            />
                            <textarea
                                name="description"
                                value={newEvent.description}
                                onChange={handleInputChange}
                                placeholder="Event Description"
                                className={`${inputClasses} h-24 resize-none`}
                                required
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    name="date"
                                    value={newEvent.date}
                                    onChange={handleInputChange}
                                    className={inputClasses}
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={newEvent.time}
                                    onChange={handleInputChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="location"
                                value={newEvent.location}
                                onChange={handleInputChange}
                                placeholder="Event Location"
                                className={inputClasses}
                                required
                            />
                            <input
                                type="text"
                                name="image"
                                value={newEvent.image}
                                onChange={handleInputChange}
                                placeholder="Image URL"
                                className={inputClasses}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm sm:text-base font-medium"
                            >
                                Create Event
                            </button>
                        </form>
                    </div>

                    {/* Events List */}
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md lg:col-span-2">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Manage Events</h2>
                        <div className="space-y-4 overflow-y-auto max-h-[600px]">
                            {events.map((event) => (
                                <div key={event._id} className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 mt-1">{event.description}</p>
                                    <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm text-gray-500">
                                        <span>{new Date(event.date).toLocaleDateString()}</span>
                                        <span>at {event.time}</span>
                                        <span>• {event.location}</span>
                                    </div>
                                    <button
                                        className="mt-3 px-4 py-1.5 bg-red-500 text-white text-xs sm:text-sm rounded-md hover:bg-red-600 transition-colors"
                                        onClick={() => handleDeleteEvent(event._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;