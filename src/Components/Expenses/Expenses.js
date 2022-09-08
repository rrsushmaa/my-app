import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Cards/Card";
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [year, setYear] = useState('2019');
    const filterChangeHandler = (filteredYear) => {
        setYear(filteredYear);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

    let expensesContent = filteredExpenses.map((expenseItem) =>
        <ExpenseItem
            key={expenseItem.id}
            date={expenseItem.date}
            title={expenseItem.title}
            price={expenseItem.amount}/>
    );

    if (filteredExpenses.length === 0) {
        expensesContent = <div>
            <p style={{color: 'white'}}> No expenses found for the year {year}</p>
        </div>;
    }

    return (
        <div>
            <Card className="expenses">
                <div>
                    <ExpensesFilter selected={year} onFilterChange={filterChangeHandler}/>
                </div>
                <ExpensesChart expenses={filteredExpenses}/>
                <div>
                    {expensesContent}
                </div>

            </Card>
        </div>
    );
}

export default Expenses;