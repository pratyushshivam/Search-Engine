import { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "12a8bf6df82db763a";
//custom hook starts here
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data }; //returning an object of data
};

export default useGoogleSearch;
