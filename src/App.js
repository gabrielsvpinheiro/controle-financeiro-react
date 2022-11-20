import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

const App = () => {
  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transactions) => Number(transactions.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transactions) => Number(transactions.amount));

    const expense = amountExpense.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    const income = amountIncome.reduce((acc, curr) => acc + curr, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''} R$ ${total}`);

  }, [transactionsList]);

  return (
    <>
        <Header />
        <Resume />
        <Form />
        <GlobalStyle />
    </>
  );
};

export default App