import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Cards/Card";
import {useState} from "react";

const Expenses = (props) => {
    const [year, setYear] = useState('2019');
    const filterChangeHandler = (filteredYear) => {
        setYear(filteredYear);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

    return (
        <div>
            <Card className="expenses">
                <div>
                    <ExpensesFilter selected={year} onFilterChange={filterChangeHandler}/>
                </div>
                <div>
                    {
                        filteredExpenses.length === 0 ?
                            <div>
                                <p style={{color: 'white'}}> No expenses found for the year {year}</p>
                            </div>
                            :

                            filteredExpenses.map((expenseItem) =>
                                <ExpenseItem
                                    key={expenseItem.id}
                                    date={expenseItem.date}
                                    title={expenseItem.title}
                                    price={expenseItem.amount}/>
                            )

                    }
                </div>

            </Card>
        </div>
    );
}

export default Expenses;