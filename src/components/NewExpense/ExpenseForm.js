import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = setState('');

    //save the value
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = setState('');

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = setState('');

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }



    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" onChange={dateChangeHandler}>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;