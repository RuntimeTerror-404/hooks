import { useEffect, useState } from "react";
import React from "react";

function HookUseEffect() {
  const [resourcesType, setResourcesType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourcesType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourcesType]);

  return (
    <div>
      <button onClick={() => setResourcesType("posts")}>posts</button>
      <button onClick={() => setResourcesType("comments")}>comments</button>
      <button onClick={() => setResourcesType("users")}>users</button>
      <p>{resourcesType}</p>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default HookUseEffect;

// useEffect is responsible to do something after render
// useEffect has one callback function and an array
// whenever something changed in array, code in the body body will implemented
