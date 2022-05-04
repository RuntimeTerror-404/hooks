import React, { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState([]);

  useEffect(()=>{
    const api = fetch("https://api.randomuser.me/");
    
  },[])
  



  return <h3>Hello</h3>;
}

export default App;
