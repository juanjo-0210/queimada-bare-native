import { FieldValue } from 'firebase/firestore';
import { addDoc, collection, db } from '../api/firebaseConfig';



const collectionName = 'Asistent';

interface SenderMessage {
  message: string;
  isUser: boolean;
  date: FieldValue;
  iaResponse?: boolean;
  errMessage?: string;
}

export const sendMessage = async (obj: SenderMessage) => {
  const colRef = collection(db, collectionName);
  const res = await addDoc(colRef, obj);
  return res.id;
};