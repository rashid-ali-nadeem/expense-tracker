import React,{useContext} from 'react'
import {GlobalContext} from '../contexts/GobalState'


export const Transaction = ({transaction}) => {
  const { DeleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus': 'plus'}>
    {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button 
    onClick = {() => DeleteTransaction(transaction.id)} className = "delete-btn">X</button>
    </li>
  )
}


