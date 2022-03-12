import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const displayByYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <Card className="expenses">
      <ExpenseFilter 
        onChangeFilterYear={displayByYearHandler} 
        selected={filteredYear} 
      />
      <ExpensesList items={filteredExpenses} />    
    </Card>
  )
};

export default Expenses;