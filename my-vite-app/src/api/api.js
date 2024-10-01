import { useState, useEffect } from "react";

// API URL
export const APIUrl = "https://v2.api.noroff.dev/online-shop";

// Custom hook for fetching data from the API
export default function useApi(APIUrl) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await fetch(APIUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                setData(json.data || json);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [APIUrl]);

    return { data, isLoading, isError };
}











// import { useState, useEffect } from "react";

// export const APIUrl = "https://v2.api.noroff.dev/online-shop";

// export default function useApi(APIUrl) {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
  
//     useEffect(() => {
//       async function getData() {
//         try {
//           setIsLoading(true);
//           setIsError(false);
//           const response = await fetch(APIUrl);
//           const json = await response.json();
//           setData(json.data);
//         } catch (error) {
//           console.log(error);
//           setIsError(true);
//         } finally {
//           setIsLoading(false);
//         }
//       }
  
//       getData(APIUrl);
//     }, []);
//     return { data, isLoading, isError };
//   }



  // export default APIUrl; 
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