// NPM packages
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  DocumentData,
} from "firebase/firestore/lite";

// Create doc with auto id
export async function createDoc(db, path, data) {
  const collectionReference = collection(db, path);

  await addDoc(collectionReference, data);
}

// Read documents
export async function getCollection(db, path) {
  const collectionReference = collection(db, path);
  const snapshop = await getDocs(collectionReference);
  const list = snapshop.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}

// Update file
export async function updateDocument(db, path, id, data) {
  const docReference = doc(db, path, id);

  await updateDoc(docReference, data);
}

// Delete file
export async function deleteDocument(db, path, id) {
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
