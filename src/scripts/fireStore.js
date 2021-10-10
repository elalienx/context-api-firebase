// NPM packages
import { collection, getDocs } from "firebase/firestore/lite";

// Project files
import { fireStoreInstance } from "../scripts/firebase";

export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path); // code that runs locally from the SDK
  const snapshot = await getDocs(collectionReference); // code that calls the server (delay)
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}
