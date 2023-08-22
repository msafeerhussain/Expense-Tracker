import React , {useState} from "react";
import Expences from "./components/Expences/Expences";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_Expenses = [
  {
    id: 'e1',
    title : "Car Insurance",
    amount : 294,
    date : new Date(2021, 7, 15) 
  },
  {
    id: 'e2',
    title: "Home insurance",
    amount: 100,
    date : new Date(2022, 7, 19)
  },
  {
    id : 'e3',
    title: "Person Insurance",
    amount: 150,
    date: new Date(2023, 7, 25)

  }
];


function App() {
const [expenses , setExpenses] = useState(DUMMY_Expenses);  
  const AddExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }
  
  return (
    <div>
      <NewExpense onNewExpenseData = {AddExpenseHandler} />
      <Expences items={expenses}/>
      
      

    </div>
  );
}

export default App;
