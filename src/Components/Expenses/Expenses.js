import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="expenses">
            <ExpenseItem date={props.expenses[0].date} title={props.expenses[0].title}
                         price={props.expenses[0].amount}/>
            <ExpenseItem date={props.expenses[1].date} title={props.expenses[1].title}
                         price={props.expenses[1].amount}/>
            <ExpenseItem date={props.expenses[2].date} title={props.expenses[2].title}
                         price={props.expenses[2].amount}/>
            <ExpenseItem date={props.expenses[3].date} title={props.expenses[3].title}
                         price={props.expenses[3].amount}/>
        </div>
    );
}

export default Expenses;