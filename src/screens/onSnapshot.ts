import { collection, db, onSnapshot, orderBy, query } from "../api/firebaseConfig";

const collectionName = "Asistent"

export const getMessageRT = (calback) => {
  const colRef = query(collection(db, collectionName), orderBy("date"))
  const unsubscribe = onSnapshot(colRef, (snapshot) => {
  
    calback(snapshot.docs.map( doc => ({
        ...doc.data(), 
        id: doc.id
    })))

  });

  return unsubscribe
}
