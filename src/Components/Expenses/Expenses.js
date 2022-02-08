import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Cards/Card";
import {useState} from "react";

const Expenses = (props) => {
    const [year, setYear] = useState('2019');
    const filterChangeHandler = (filteredYear) => {
        setYear(filteredYear);
        console.log(filteredYear);
    }
    return (
        <div>


            <Card className="expenses">
                <div>
                    <ExpensesFilter selected = {year} onFilterChange={filterChangeHandler}></ExpensesFilter>
                </div>
                <div>
                    <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title}
                                 price={props.expenses[0].amount}/>
                    <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title}
                                 price={props.expenses[1].amount}/>
                    <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title}
                                 price={props.expenses[2].amount}/>
                    <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title}
                                 price={props.expenses[3].amount}/>
                </div>

            </Card>
        </div>
    );
}

export default Expenses;