import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(setActiveNote(docRef.id, newNote));
  };
};

export const setActiveNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return (dispatch) => {
    loadNotes(uid).then((notes) => dispatch(setNotes(notes)));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
