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
      "_id": "6148596e1940ea966656f363",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
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
      "_id": "6148596e1940ea966656f363",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
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
      "_id": "6148596e1940ea966656f363",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    },
    {
      "_id": "6148596e1940ea966656f363",
      "user": "61483de0d1306251693050ea",
      "title": "Sia",
      "description": "Please access the palylist",
      "tag": "Songs",
      "date": "2021-09-20T09:50:38.843Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesIntial)
    
return (
   <NoteContext.Provider value={{notes,setNotes}}>
    {props.children}
   </NoteContext.Provider>
 )
}
export default NoteState;