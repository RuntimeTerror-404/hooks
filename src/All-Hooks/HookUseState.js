import React from "react";
import { useState } from "react";

function HookUseState() {
  const nums = [34, 32, 1];

  return (
    <div>
      <button>-</button>

      <div>
        {nums.map((num) => {
          return <h2>{num}</h2>;
        })}
      </div>
      <button>+</button>
    </div>
  );
}

export default HookUseState;

// useState is a hook used for state management in react, it returns an array
// it has inital state and function to change that state

/*
const [count, setCount] = useState([1, 3, 5]);

  const handleAdd = () => {
    setCount((prev) => {
      return [...prev, prev[prev.length - 1] + 1];
    });
  };

  const handleSubtract = () => {
    setCount((count) => count.filter((item, i) => i !== count.length - 1));
  };
*/

/*
const [data, setData] = useState({ name: "Mohit", age: 19 });

  const dataAdd = () => {
    setData((prev)=>{
        return{
            ...prev,
            age:prev.age=20
        }
    })
  };
*/
