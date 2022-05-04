import React from "react";
import { useState } from "react";

function HookUseRef() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
    </div>
  );
}

export default HookUseRef;
