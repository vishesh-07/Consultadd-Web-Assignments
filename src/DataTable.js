import './index.css';
const DataTable = ({data}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                { data && data.map((d)=>
                <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.dob}</td>
                </tr>
                )}
            </tbody>
        </table>
     );
}
 
export default DataTable;