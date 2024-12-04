import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export async function createBooking(roomId: string, userId: string) {
  return await addDoc(collection(db, 'bookings'), {
    roomId,
    userId,
    status: 'pending',
    createdAt: new Date().toISOString()
  });
}

export async function getUserBookings(userId: string) {
  const q = query(collection(db, 'bookings'), where('userId', '==', userId));
  const bookingSnapshot = await getDocs(q);
  return bookingSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}