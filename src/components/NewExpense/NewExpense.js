import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setDisplayExpenseForm(false);
    };


    const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

   
    const addExpenseHandler = (event) => {
        setDisplayExpenseForm(true);
    }

    const stopEditing = (event) => {
        setDisplayExpenseForm(false);
    }
        
    return (
        <div className="new-expense">
            {!displayExpenseForm && <button type="submit" onClick={addExpenseHandler}>Add Expense</button>}
            {displayExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
        </div>
    )

};

export default NewExpense;