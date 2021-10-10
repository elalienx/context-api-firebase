export default function candidateReducer(state, action) {
  switch (action.type) {
    case "ADD_CANDIDATE":
      return addItem(state, action);
    case "SET_CANDIDATES":
      return setCandidates(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function addItem(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function setCandidates(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}
