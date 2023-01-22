import DataTable from './DataTable';
import useFetchData from './FetchData';
import './index.css';
import RadioForm from './RadioForm';
function App() {
  const [data,setData]=useFetchData('https://vishesh-07.github.io/json-api/data.json');
  return (
    <div className="App">
      <h1 className="heading">Birthday Sort</h1>
      {data && <DataTable data={data}/>}
      <RadioForm data={data} setData={setData}/>
    </div>
  );
}

export default App;
