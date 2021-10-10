import { getCollection } from "../scripts/fireStore";
import { fireStoreInstance } from "../scripts/firebase";

export default function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action);
    case "EDIT_ITEM":
      return editItem(state, action);
    case "READ_FILES":
      return readItems(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function addItem(state, action) {
  const { item } = action;

  if (item !== null) return [...state, item];
  return state;
}

function editItem(state, action) {
  const { editedItem } = action;
  const index = state.findIndex((item) => item.id === editedItem.id);
  const clonedState = [...state];

  clonedState[index] = editedItem;
  return clonedState;
}

async function readItems(action) {
  const { path } = action;

  const collection = await getCollection(fireStoreInstance, path);
  console.log("candidateReducer.js readItems() collection", collection);
  return collection;
}
