import React,{useState, useContext} from 'react';
import {GlobalContext} from '../contexts/GobalState';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const {AddTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();

      const NewTransaction = {
        id: Math.floor(Math.random()* 100000000),
        text,
        amount: +amount
      }
      AddTransaction(NewTransaction);
    }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit = {onSubmit}>
        <div >
            <label htmlFor = "text">Description</label>
            <input type = "text" value = {text} onChange = {(e) =>setText(e.target.value)} placeholder = "Enter text..." required />
        </div>
        <div className = "form-control">
            <label htmlFor = "amount">Amount <br/>(negative - expense, positive - income)</label>
            <input type = "number" value = {amount} onChange = {(e)=>setAmount(e.target.value)} placeholder = "Enter amount..." required />
        </div>
        <button className = "btn">Add Transaction</button>
      </form>
    </>
  )
}