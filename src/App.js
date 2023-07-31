import { useState } from "react";
import Expense from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesFilter from "./components/ExpenseFilter";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationofexpendature: "grocery"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,  locationofexpendature: "Electronics"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationofexpendature: "vehicle"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationofexpendature: "wood"
    },
  ];
  const [initialexpenses, setExpenses] = useState(expenses);

  const getExpense = (getExpenseData)=>{
        const newExpense = {
          ...getExpenseData,
          id: Math.random().toString()
        }
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        
  }
  const[filteredyear,setfilteredyear] = useState('2020')  ;
  const filterChangeHandler = (selectedyear)=>{
      setfilteredyear(selectedyear);
      
  }
   const newExpense = expenses.filter((expense)=>{
    // console.log(expense.date.getFullYear());
     return expense.date.getFullYear()==filteredyear;
  })
   let ExpenseContent = <p>No Expense found</p>
 
  if (newExpense.length>0) {
     ExpenseContent = newExpense.map((expense)=>(
      <Expense title={expense.title} amount={expense.amount} date={expense.date} location={expense.locationofexpendature}
    />
    ))
  }
  else if(expenses.length==1) {
    ExpenseContent = <p>Add more Expenses</p>
  }
  const [isEditing,setIsEditing] = useState(false);
  const starteditingHandler = ()=>{
    setIsEditing(true);
  }
  const stopediting = ()=>{
    setIsEditing(false);
  }
  return (
    <>
      {!isEditing && <button onClick={starteditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveexpense = {getExpense} onclose={stopediting}/>}
       <ExpensesFilter selected={filteredyear} onChangeFilter = {filterChangeHandler}/>
       {ExpenseContent}
      
    </>
  );
}

export default App;

