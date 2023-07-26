import React from 'react'
import './expense.css'
import ExpenseDate from './expenseDate';
import ExpenseDetail from './ExpenseDetail';
function Expense(props) {
  return (
    <div className='expense-item'>
        <ExpenseDate date= {props.date}/>
         <ExpenseDetail title={props.title} location={props.location} amount={props.amount} />
      
    </div>
  )
}

export default Expense;