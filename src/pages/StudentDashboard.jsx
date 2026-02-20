import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase"

function StudentDashboard() {
    const [doubt, setDoubt] = useState(""); 
    //useState is used to store the changing data. doubt = current value of doubts. setDoubt = function to change it, and show on screen.

   const submitDoubt = async () =>
   {
       if(doubt.trim() === "") return;
   
       //submitDoubt submits data to DB when user clicks submit. trim() removes extra spaces. "async" allows function to waits until the saving part finishes.

       await addDoc(collection(db, "doubts"), {
         question: doubt,
         createAt: new Date()
        });
        //Here we're creating a new record in firebase, insidde the collection named "doubts". addDoc(...) is used to add a new document / new entry inside doubts. "await" pauses/waits on slow  operation, wait and async work together. createAt stores the current time to show when is the query created. question:doubt is used to save the doubt typed by student.

        setDoubt(""); //clears input box after submit.
    }

    return (
    <div>
      <h2>Ask Your Doubt</h2>

      <input
        type="text"
        placeholder="Type your doubt..."
        value={doubt}
        onChange={(e) => setDoubt(e.target.value)}
      />

      <button onClick={submitDoubt}>
        Submit
      </button>
    </div>
  );
}

