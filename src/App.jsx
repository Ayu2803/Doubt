import { useState } from 'react'
import './App.css'

import Doubt from "./pages/Doubt.jsx"; // import your fixed Doubt component

export default function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Student Doubt Form</h1>
      <Doubt /> {/* renders the form */}
    </div>
  );
}

