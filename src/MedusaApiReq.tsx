import axios from "axios";
export async function getProducts() {
  return await axios.get("http://localhost:9000/store/products");
}
// import React from 'react';
// import axios from 'axios';
// const MedusaApiReq = () => {
//   return (
//     <div>MedusaApiReq</div>
//   )
// }

// export default MedusaApiReq