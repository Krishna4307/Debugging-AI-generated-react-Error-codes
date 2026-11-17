

// ===================================================
//         AI Generated Code
// ===================================================

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count++);
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;

// ===================================================
//         Code After Solved Bugs
// ===================================================

import { useState } from "react";
function Task1(){
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count+1)
    }
    return(
        <>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </>

    )
}
export default Task1;