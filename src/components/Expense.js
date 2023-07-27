import React from 'react'
import './expense.css'
import ExpenseDate from './expenseDate';
import ExpenseDetail from './ExpenseDetail';
function Expense(props) {
  const deleteitem = (e)=>{
     let get_item = e.target.parentElement;
     get_item.remove();
  }
  return (
    <div className='expense-item'>
        <ExpenseDate date= {props.date}/>
         <ExpenseDetail title={props.title} location={props.location} amount={props.amount} />
         <button onClick={deleteitem} className='expense-item__price'>Delete</button>
    </div>
  )
}

export default Expense;
