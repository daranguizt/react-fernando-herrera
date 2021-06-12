import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadFile } from "../../actions/notes";

export const NotesAppBar = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureClick = () => {
      document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
        dispatch(startUploadFile(file));
    }
  }

  return (
    <div className="notes__appbar">
      <span>
        {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
      </span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
