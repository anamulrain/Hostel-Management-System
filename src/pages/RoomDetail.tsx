import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Bed, Users, Wifi, Timer, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getRoom } from '../services/roomService';
import { createBooking } from '../services/bookingService';
import toast from 'react-hot-toast';

export default function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      const data = await getRoom(id);
      setRoom(data);
      setLoading(false);
    };
    fetchRoom();
  }, [id]);

  const handleBooking = async () => {
    if (!user) {
      toast.error('Please login to book a room');
      navigate('/login');
      return;
    }

    try {
      await createBooking(id, user.uid);
      toast.success('Room booked successfully!');
      navigate('/bookings');
    } catch (error) {
      toast.error('Failed to book room');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg">
          <img
            src={room.image}
            alt={room.name}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {room.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Room view ${index + 1}`}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-900">{room.name}</h2>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {room.type}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="flex items-center text-gray-600">
              <Bed className="h-5 w-5 mr-2" />
              <span>{room.beds} Beds</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-5 w-5 mr-2" />
              <span>{room.available} Available</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Wifi className="h-5 w-5 mr-2" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Timer className="h-5 w-5 mr-2" />
              <span>24/7 Access</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="mt-4 text-gray-600">{room.description}</p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-indigo-600">
                  ${room.price}
                  <span className="text-base font-normal text-gray-500">/month</span>
                </p>
                <p className="mt-1 text-sm text-gray-500">All inclusive</p>
              </div>
              <button
                onClick={handleBooking}
                disabled={!room.available}
                className={`inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                  room.available
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                <Shield className="h-5 w-5 mr-2" />
                {room.available ? 'Book Now' : 'Fully Booked'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}