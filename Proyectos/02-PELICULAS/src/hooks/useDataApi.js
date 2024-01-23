// Custom Hook para fetch de Apis

import { useEffect, useState } from "react"

export default function useDataApi(apiEndpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
     const fetchData = async () => {
        try {
          const response = await fetchData(apiEndpoint);
          if(!response.ok) {
            throw new Error("Error fetching data");
          }
          const result = await response.json(); 
          setData(result); 
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
     }

     fetchData();
    }, [apiEndpoint])

    return {data, loading, error};
    
}