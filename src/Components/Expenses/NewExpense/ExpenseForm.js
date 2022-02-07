import './ExpenseForm.css';
import './NewExpense.css'
import {useState} from "react";

const ExpenseForm = () => {
    const [newTitle, setNewTitle] = useState('');

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
    }

    const [newAmount, setNewAmount] = useState('');
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    }

    const [newDate, setNewDate] = useState('');
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: newTitle, amount: newAmount, date: new Date(newDate)
        }

        console.log(expenseData);
    }

    const resetHandler = (event) => {
        event.preventDefault();
        setNewAmount('');
        setNewDate('');
        setNewTitle('');
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
                    </div>

                </div>
            </form>
        </div>);
}

export default ExpenseForm;