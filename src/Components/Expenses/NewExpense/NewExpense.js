import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (prop) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        prop.onSubmitNewExpense(expenseData);
        setShowExpenseForm(false);

    };
    const hideExpenseForm = () => {
        setShowExpenseForm(false);
    }
    let expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelExpenseEditing={hideExpenseForm}/>;

    const handleOnExpenseAddition = () => {
        setShowExpenseForm(!showExpenseForm);
    }

    return (
        <div className="new-expense">
            <button onClick={() => {
                handleOnExpenseAddition();
            }}
                    hidden={showExpenseForm}
            >Add New Expense
            </button>

            {showExpenseForm ? expenseForm : <div/>}
        </div>
    );
}

export default NewExpense;