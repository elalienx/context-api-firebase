// NPM packages
import { collection, getDocs } from "firebase/firestore/lite";

export async function getCollection(database, path) {
  const collectionReference = collection(database, path); // code that runs locally from the SDK
  const snapshot = await getDocs(collectionReference); // code that calls the server (delay)
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}
