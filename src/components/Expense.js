import React from 'react'
import './expense.css'
import ExpenseDate from './expenseDate';
import ExpenseDetail from './ExpenseDetail';
function Expense(props) {
let amount = props.amount;
  const [amount2,setItem] = useState(amount);
  const update_item= ()=>{
         setItem('100$');
  }
  return (
    <div className='expense-item'>
        <ExpenseDate date= {props.date}/>
         <ExpenseDetail title={props.title} location={props.location} amount={props.amount} />
         <button onClick={update_item}  className='expense-item__price'>update</button>
    </div>
  )
}

export default Expense;
