import './ExpenseForm.css';
import './NewExpense.css'
import {useState} from "react";

const ExpenseForm = (prop) => {
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle, amount: newAmount, date: new Date(newDate)
        }
        prop.onSaveExpenseData(expenseData);
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setNewAmount('');
        setNewDate('');
        setNewTitle('');
        prop.onCancelExpenseEditing();
    }

    const cancelHandler = () => {
        prop.onCancelExpenseEditing();
    }

    return (<div>
        <form onSubmit={submitHandler} onReset={resetHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={newAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={newDate} min="1970-01-01" max="2024-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__control">
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                    <button type="reset">Reset</button>
                    <button type="button" onClick={cancelHandler}>Cancel</button>
                </div>

            </div>
        </form>
    </div>);
}

export default ExpenseForm;