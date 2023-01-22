import './index.css';
const RadioForm = ({data,setData}) => {
    const changeSort = (e) => {
        var temp=data;
        var sortBy=e.target.value;
        if(sortBy==='name'){
            temp.sort(function(a, b){
                if(a.name>b.name){
                    return 1;
                }else{
                    return -1;
                }
            });
            setData(JSON.parse(JSON.stringify(temp)));
        }else{
            temp.sort(function(a,b){
                var [d1,m1,y1]=a.dob.split('/');
                var [d2,m2,y2]=b.dob.split('/');
                var date1=new Date(+y1,+m1-1,+d1);
                var date2=new Date(+y2,+m2-1,+d2);
                var timeDiff1=Math.abs(Date.now() - new Date(date1).getTime());
                var age1=Math.floor(timeDiff1 / (1000 * 3600 * 24) / 365.25);
                var timeDiff2=Math.abs(Date.now() - new Date(date2).getTime());
                var age2=Math.floor(timeDiff2 / (1000 * 3600 * 24) / 365.25);
                if(age1<age2){
                  return 1;
                }else{
                  return -1;
                }
            });
            setData(JSON.parse(JSON.stringify(temp)));
        }
    }
    return (
        <div className="formDiv" onChange={e=>changeSort(e)}>
            <span>Sort By: </span>
            <input type='radio' value='name' name='sortBy'/>Name
            <input type='radio' value='dob' name='sortBy'/>Date of Birth
        </div>
    );
}
 
export default RadioForm;