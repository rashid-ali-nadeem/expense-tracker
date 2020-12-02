import React from 'react';
import './App.css';

// importing components
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpanse} from './components/IncomeExpanse';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

//importing Contexts
import {GlobalProvider} from './contexts/GobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpanse/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
