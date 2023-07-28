import { useState } from "react";
import Expense from "./components/Expense";
import ExpenseForm from "./components/ExpenseForm";
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
  return (
    <>
      <ExpenseForm onSaveexpense = {getExpense}/>
      
       {initialexpenses.map((expense)=>(
           <Expense title={expense.title} amount={expense.amount} date={expense.date} location={expense.locationofexpendature}
         />
       ))}
      
    </>
  );
}

export default App;

