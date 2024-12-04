import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getUserBookings } from '../services/bookingService';
import { getRoom } from '../services/roomService';

export default function Bookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (user) {
        const bookingsData = await getUserBookings(user.uid);
        const bookingsWithRooms = await Promise.all(
          bookingsData.map(async (booking) => {
            const room = await getRoom(booking.roomId);
            return { ...booking, room };
          })
        );
        setBookings(bookingsWithRooms);
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h2>
      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">You haven't made any bookings yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={booking.room.image}
                alt={booking.room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {booking.room.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>
                      Booked on:{' '}
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Status: {booking.status}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-indigo-600">
                    ${booking.room.price}/month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}