import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesIntial = [];
  const [notes, setNotes] = useState(notesIntial);
  // GET All Notes
  const getNotes = async () => {
    // TODO: API CALL
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ODNkZTBkMTMwNjI1MTY5MzA1MGVhIn0sImlhdCI6MTYzMjEyNDM4NH0.4QyDbCdNOjCcqzV157Bmv49yfqHRdmZacEsUTxNK0RY",
        }
      });
      const json = await response.json()
      console.log(json);
      setNotes(json)
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ODNkZTBkMTMwNjI1MTY5MzA1MGVhIn0sImlhdCI6MTYzMjEyNDM4NH0.4QyDbCdNOjCcqzV157Bmv49yfqHRdmZacEsUTxNK0RY",
        },
        body: JSON.stringify({title,description,tag}),
      });
    
      const json = await response.json();
      console.log(json)

    const note = {
      _id: "6148596e1940ea966656f370",
      user: "61483de0d1306251693050ea",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-20T09:50:38.843Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    // TODO: API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ODNkZTBkMTMwNjI1MTY5MzA1MGVhIn0sImlhdCI6MTYzMjEyNDM4NH0.4QyDbCdNOjCcqzV157Bmv49yfqHRdmZacEsUTxNK0RY",
      },
      
    });

    const json = response.json();
    console.log("deleteing note", id);
    const newNotes = notes.filter((note) => { return note._id !== id; });
    setNotes(newNotes);
  };
  
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ODNkZTBkMTMwNjI1MTY5MzA1MGVhIn0sImlhdCI6MTYzMjEyNDM4NH0.4QyDbCdNOjCcqzV157Bmv49yfqHRdmZacEsUTxNK0RY",
        },
        body: JSON.stringify({title,description,tag}),
      });
      const json = await response.json();
    console.log(json)
    
        let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
