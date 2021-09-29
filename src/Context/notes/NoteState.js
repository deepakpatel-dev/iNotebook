import NoteContext from './noteContext';
import { useState } from "react";

const NoteState = (props) => {
  const notesIntial =[
    {
      "_id": "6148596e1940ea966656f363",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "61486a30de015e4051c9813b",
      "user": "61483de0d1306251693050ea",
      "title": "Sia unforgettablle",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T11:02:08.762Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f364",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f365",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f366",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f367",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f368",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f369",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesIntial)

  // Add a Note
  const addNote = (title,description,tag) => {
    // TODO API CALL
    const note = {"_id": "6148596e1940ea966656f370",
    "user": "61483de0d1306251693050ea",
    "title":title,
    "description": description,
    "tag":tag,
    "date": "2021-09-20T09:50:38.843Z",
    "__v": 0}
    setNotes(notes.concat(note))
  }
  // Delete a Note
  const deleteNote = (id) => {

  }
  
  // Edit a Note
  const editNote = (id) => {

  }
return (
   <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
    {props.children}
   </NoteContext.Provider>
 )
}
export default NoteState;