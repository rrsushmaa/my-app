import './ExpenseItem.css'
import ExpenseDateItem from "../ExpenseDateItem/ExpenseDateItem";
import Card from "../../UI/Cards/Card";

const ExpenseItem = (props) => {

    return (
        <Card className="expense-item">
           <ExpenseDateItem date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.price}</div>
            </div>
        </Card>);
}

export default ExpenseItem;