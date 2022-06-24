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
    return (
        <div>


            <Card className="expenses">
                <div>
                    <ExpensesFilter selected={year} onFilterChange={filterChangeHandler}/>
                </div>
                <div>
                    {
                        props.expenses.map((expenseItem) =>
                            expenseItem.date.getFullYear().toString() === year &&
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