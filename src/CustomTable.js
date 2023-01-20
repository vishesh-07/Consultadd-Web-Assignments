import './index.css'
const CustomTable = ({data}) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            {data.map((d)=>(
                <tfoot key={d.id}>
                    <tr>
                        <td>{d.userId}</td>
                        <td>{d.id}</td>
                        <td>{d.title}</td>
                        <td>{d.body}</td>
                    </tr>
                </tfoot>
            ))}
        </table> 
     );
}
 
export default CustomTable;