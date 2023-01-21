import { useState } from "react";
import useFetchData from "./fetchApi";

const CurrencyForm = () => {
    const [amount,setAmount]=useState(1);
    const [currency1,setCurrency1]=useState('INR');
    const [currency2,setCurrency2]=useState('INR');
    const {data}=useFetchData('https://api.exchangerate.host/latest?base='+currency1);
    const [result,setResult]=useState(1);
    const convertCurrency=(e,amount,currency2)=>{
        e.preventDefault();
        setResult(Number(amount*data.rates[currency2]).toFixed(2));
    }
    return (  
        <div className="formDiv">
            <form onSubmit={(e)=>convertCurrency(e,amount,currency2)}>
                <input type='number'
                    min='1' 
                    required 
                    placeholder="Enter Amount" 
                    value={amount} 
                    onChange={(e)=>{
                        setAmount(e.target.value);
                        setResult(e.target.value);
                    }}
                    >
                    </input>
                <select
                    value={currency1}
                    onChange={(e)=>setCurrency1(e.target.value)}
                >
                    <option value='Currency1' disabled>Currency 1</option>
                    <option value='INR'>INR</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='AUD'>AUD</option>
                    <option value='CAD'>CAD</option>
                </select>
                <select
                value={currency2}
                onChange={(e)=>setCurrency2(e.target.value)}
                >
                    <option value='Currency2' disabled>Currency 2</option>
                    <option value='INR'>INR</option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='AUD'>AUD</option>
                    <option value='CAD'>CAD</option>
                </select>
                <br></br>
                <button>Convert Currency</button>
            </form>
            <div className="output">
                <span>{amount}</span>
                <span>{currency1}</span>
                <span>is equals to</span>
                <span>{result}</span>
                <span>{currency2}</span>
            </div>
        </div>
    );
}
 
export default CurrencyForm;