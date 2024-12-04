import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [events, setEvents] = useState([]);
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
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/events');
            setEvents(response.data);
        } catch (error) {
            toast.error('Failed to fetch events');
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

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Chairman Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="title"
                            value={newEvent.title}
                            onChange={handleInputChange}
                            placeholder="Event Title"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <textarea
                            name="description"
                            value={newEvent.description}
                            onChange={handleInputChange}
                            placeholder="Event Description"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        ></textarea>
                        <input
                            type="date"
                            name="date"
                            value={newEvent.date}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="time"
                            name="time"
                            value={newEvent.time}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            value={newEvent.location}
                            onChange={handleInputChange}
                            placeholder="Event Location"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="text"
                            name="image"
                            value={newEvent.image}
                            onChange={handleInputChange}
                            placeholder="Image URL"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                        >
                            Create Event
                        </button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Manage Events</h2>
                    <ul className="space-y-4">
                        {events.map((event) => (
                            <li key={event._id} className="bg-white p-4 rounded-md shadow">
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                                <p className="text-sm text-gray-500">
                                    {new Date(event.date).toLocaleDateString()} at {event.time}
                                </p>
                                <button
                                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                                    onClick={() => handleDeleteEvent(event._id)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;