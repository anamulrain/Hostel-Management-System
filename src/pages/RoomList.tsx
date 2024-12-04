import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users } from 'lucide-react';
import { getRooms } from '../services/roomService';

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
      setLoading(false);
    };
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Rooms</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Link
            key={room.id}
            to={`/room/${room.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {room.name}
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Bed className="h-5 w-5 mr-1" />
                  <span>{room.beds} Beds</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-1" />
                  <span>{room.available} Available</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-indigo-600">
                  ${room.price}/month
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {room.type}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}