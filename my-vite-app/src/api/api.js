const APIUrl = "https://v2.api.noroff.dev/online-shop";

export default APIUrl; 
// // Fetch all products
// export async function fetchAllProducts() {
//     const response = await fetch(APIUrl);
//     if (!response.ok) {
//              throw new Error("Failed to fetch products");
//              }
//              const json = await response.json();
//              return json;
//  };


// // Fetch a single product by ID
// export async function fetchProductById(id) {
//    const response = await fetch(`${APIUrl}/${id}`);
//    if (!response.ok) {
//         throw new Error("Failed to fetch product");
//         }
//         const json = await response.json();
//         return json;
//       };
