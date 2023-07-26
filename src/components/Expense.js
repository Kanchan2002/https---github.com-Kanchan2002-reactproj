import React from 'react'
import './expense.css'
function Expense(props) {
  return (
    <div className='expense-item'>
      <div className='expense-item_description'>{props.date.toISOString()}</div>
      <h3 className='expense-item_description'>{props.locationofexpendature}</h3>
      <div>
        <h2 >{props.title}</h2>
        
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </div>
  )
}

export default Expense;