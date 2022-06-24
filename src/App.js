import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {

    const initialExpenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2021, 7, 14),
        },
        {
            id: 'e2',
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2022, 1, 4),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2022, 2, 6),
        },
    ]
    const [overallExpenses, setOverallExpenses] = useState(initialExpenses);

    const submitNewExpenseHandler = (expenseData) => {
        setOverallExpenses((prevExpenses) => {
            return [expenseData, ...prevExpenses];
        });
    }

    return (<div>
        <h2>Expense Report</h2>
        <NewExpense onSubmitNewExpense={submitNewExpenseHandler}/>
        <Expenses expenses={overallExpenses}/>
    </div>);
}

export default App;
