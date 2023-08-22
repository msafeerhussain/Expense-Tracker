import React , {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle , ChangeEnteredTitle] = useState('');
    const [enteredAmount , ChangeEnteredAmount] = useState('');
    const [enteredDate , ChangeEnteredDate] = useState('');
    
    const titleChangeHandler = (event)=>{
        ChangeEnteredTitle(event.target.value);
        // console.log(enteredTitle)
        
    }
    const amountChangeHandler = (event)=>{
        ChangeEnteredAmount(event.target.value);
        // console.log(enteredAmount);
        
    }
    const dateChangeHandler = (event)=>{
        ChangeEnteredDate(event.target.value);
        // console.log(enteredDate)
        
    }
    const SubmitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        ChangeEnteredAmount("");
        ChangeEnteredTitle("");
        ChangeEnteredDate("");

    };
  return (
    <form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} min= '2019-01-01' max='2023-12-31' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}> Cancel</button>
        <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
