import { useState,useEffect} from "react";
const useFetchAPI = (url) => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
          return res.json();
        })
        .then(data=>{
            console.log(data.base);
          setData(data);
        //   console.log(data);
        })
      },[url]);
      return {data};
}
 
export default useFetchAPI;