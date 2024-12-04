import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function getRooms() {
  const roomsCol = collection(db, 'rooms');
  const roomSnapshot = await getDocs(roomsCol);
  return roomSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function getRoom(id: string) {
  const roomDoc = doc(db, 'rooms', id);
  const roomSnapshot = await getDoc(roomDoc);
  return {
    id: roomSnapshot.id,
    ...roomSnapshot.data()
  };
}