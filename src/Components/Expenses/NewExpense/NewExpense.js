import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        prop.onSubmitNewExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    );
}

export default NewExpense;