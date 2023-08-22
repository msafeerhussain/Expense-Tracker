import React  from 'react';
import './ExpenseItem.css'
import ExpenceDate from './ExpenceDate';
import Cards from '../UI/Cards';
function ExpenseItem(props){  
    // const [title ,  setState] = useState(props.title); 
    // // let title = props.title; 
    // const ClickHandler= ()=> {
    //     // title = "Updated!!!!";
    //     setState("updated!!!");
    //     console.log(title);

    // }
    return (<Cards className="expense-item">
        <ExpenceDate date = {props.date}/>
        <div className="expense-item-description">
            <h2>{props.title}</h2>
            <div className="expense-item-price">${props.amount}</div>
        </div>
        {/* <button onClick={ClickHandler}>Click me</button> */}
    </Cards>)
}
export default ExpenseItem;