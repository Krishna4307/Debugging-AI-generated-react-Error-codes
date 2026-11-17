import { useState } from "react";
// ===================================================
//         AI Generated Code
// ===================================================
// function Products() {
//   const products = ["Laptop", "Mobile", "Tablet"];
//   const [search, setSearch] = useState("");
//   const filteredProducts = products.filter((product) => {
//     product.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <div>
//       <input
//         value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products"/>
//       {filteredProducts.map((product, index) => (
//         <p key={index}>{product}</p>
//       ))}
//     </div>
//   );
// }

// export default Products;

// ===================================================
//         Code After Solved Bugs
// ===================================================
function Task2() {
  const products = ["Laptop", "Mobile", "Tablet"];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />

      {filteredProducts.map((product, index) => (
        <p key={index}>{product}</p>
      ))}
    </div>
  );
}

export default Task2;