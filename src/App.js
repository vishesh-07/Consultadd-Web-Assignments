import './index.css';
import { useState } from 'react';
import useFetchData from './FetchData';
import CustomTable from './CustomTable';
function App() {
  const lst=['Show Data','Hide Data'];
  const [text,setText]=useState('Show Data');
  const [val,setVal]=useState(false);
  const {data,isPending,error}=useFetchData('https://jsonplaceholder.typicode.com/posts');
  const toggle = (val)=>{
    setVal(!val);
    setText(lst[Number(!val)]);
  }
  return (
    <div className="main-div">
      <button onClick={()=>toggle(val)}>{text}</button>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && val &&<CustomTable data={data}/>}
    </div>
  );
}

export default App;
