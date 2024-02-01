import React,{ useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const data=await fetch(url)
          const result=await data.json()
          console.log(result)
          setData(result)
        }
        fetchData()
      }, [])
    return {
        data
    }
}

export default React.memo(useFetch)