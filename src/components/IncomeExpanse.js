import React,{useContext} from 'react'
import {GlobalContext} from '../contexts/GobalState'


export const IncomeExpanse = () => {
  const {transactions} = useContext(GlobalContext);

  const amount = transactions.map(transactions => transactions.amount);

  const income = amount
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item),0)
    .toFixed(2);

  const expanse = amount
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item),0) * -1
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
          <h4>Income</h4>
          <p className ="money plus">+${income}</p>
      </div>
      <div>
          <h4>Expanse</h4>
          <p className="money minus">-${expanse}</p>
      </div>
    </div>
  )
}
