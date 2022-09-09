import { useState, useEffect } from "react";
import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

export const useAxiosFetch = (axiosParams: object) => {
   const [data, setData] = useState<undefined>(undefined);
   const [error, setError] = useState<string | null>("");
   const [loading, setLoading] = useState<boolean>(true);

   const fetchData = async () => {
      try {
         const response = await axios.get("");
         setData(response.data);
      } catch (err) {
         setError(String(err));
         setLoading(false);
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      console.log(axiosParams);

      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return { data, error, loading };

}