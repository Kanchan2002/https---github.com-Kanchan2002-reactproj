import React, { useState } from 'react'
import './ExpenseForm.css';
function ExpenseForm() {
    const[enteredtitle,settitle] = useState('');
    const[enteredamount,setamount] = useState('');
    const[entereddate,setdate] = useState('');
   const getThetextvalue = (e)=>{
       settitle(e.target.value);
   }
   const getTheamount= (e)=>{
     setamount(e.target.value);
   }
   const getThedate = (e) => {
        setdate(e.target.value);
   }
  return (
    <div>
      <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={getThetextvalue}/>
            </div>
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={getTheamount}/>
            </div>
            <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={getThedate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>

    </div>
  )
}

export default ExpenseForm
