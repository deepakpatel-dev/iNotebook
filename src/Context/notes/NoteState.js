import NoteContext from './noteContext';
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name" : "Deepak",
        "class" : "6-B"
    }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(() => {
          setState({
              "name" : "Raksha",
              "class" : "7-B"
        })  
        },1000);
    }
return (
   <NoteContext.Provider value={{state:state , update:update}}>
    {props.children}
   </NoteContext.Provider>
 )
}
export default NoteState;