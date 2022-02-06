import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div className="expense-item__description">February 6th, 2022</div>
            <div className="expense-item__description">
                <h2>PPFAS</h2>
                <div className="expense-item__price">₹5000</div>
            </div>
        </div>);
}

export default ExpenseItem;