import React, { useState } from 'react';

const useEffectUsage = () => {
  const [obj, setObj] = useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
      const result = await data.json()
      setObj(result)
    }
    fetchData()
    return () => {
      console.log("cleanup")
    }
  },[])
  return (
    <div>
      <h1>Names</h1>
      {
        obj.length==0 ? <p>Loading...</p> :
        obj.map(item => (
          <p key={item.id}>{item.name}</p>
        ))
      }
    </div>
  );
}

export default useEffectUsage