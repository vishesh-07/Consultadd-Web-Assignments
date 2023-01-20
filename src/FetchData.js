import { useState,useEffect} from "react";

const useFetchData = (url)=>{
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
          if(!res.ok){
            throw Error('Unable to fetch data');
          }
          return res.json();
        })
        .then(data=>{
            // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        //   console.log(data);
        }).catch(err=>{
          setIsPending(false);
          setError(err.message);
          // console.log(err.message);
        })
      },[url]);
      return {data,isPending,error};
}
export default useFetchData;