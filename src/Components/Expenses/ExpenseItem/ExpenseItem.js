import './ExpenseItem.css'
import ExpenseDateItem from "../ExpenseDateItem/ExpenseDateItem";
import Card from "../../UI/Cards/Card";
import {useState} from 'react';

const ExpenseItem = (props) => {

    const [title, updateTitle] = useState(props.title);
    const clickHandler = () => {
        updateTitle('Updated');
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDateItem date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">₹{props.price}</div>
            </div>
            <button onClick={clickHandler}> Change Title</button>
        </Card>);
}

export default ExpenseItem;