import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { title, body, url } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
    }
  }, [reset, note]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          onChange={handleInputChange}
          value={title}
        />

        <textarea
          placeholder="what happened today"
          className="notes__textarea"
          onChange={handleInputChange}
          value={body}
        ></textarea>

        {url && (
          <div className="notes__images">
            <img src={url} alt={title} />
          </div>
        )}
      </div>
    </div>
  );
};
