import React , {useState} from 'react'
// import ExpenseItem from './ExpenseItem'
import './Expences.css'
import Cards from '../UI/Cards';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expences(props) {
  const [filteredYear , setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expenses)=>{
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  // let expenseContent = <p>No expense found. </p>;
  // if (filteredExpenses.length >0 ){
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem 
  //     key = {expense.id}
  //     title = {expense.title}
  //      amount = {expense.amount}
  //       date={expense.date}/>
  //   ))
  // }


  return (
    <Cards className='expenses'>
      <ExpensesFilter selected ={filteredYear} onChangeFilter = {filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items ={filteredExpenses} />
      {/* {expenseContent} */}
      {/* {props.items.map((expense) =>(
      <ExpenseItem 
      key = {expense.id}
      title = {expense.title}
       amount = {expense.amount}
        date={expense.date}/>))} */}
      {/* <ExpenseItem 
      title = {props.items[0].title}
      amount = {props.items[0].amount}
      date = {props.items[0].date} 
      ></ExpenseItem>
      <ExpenseItem 
      title = {props.items[1].title}
      amount = {props.items[1].amount}
      date = {props.items[1].date} 
      ></ExpenseItem>
      <ExpenseItem 
      title = {props.items[2].title}
      amount = {props.items[2].amount}
      date = {props.items[2].date} 
      ></ExpenseItem> */}
    </Cards>
  )
}

export default Expences;
