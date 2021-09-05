import React from 'react'
import ExpenseItem from './expenseItem'

const ExpenseList = () => {
    const Expenses = [
        {id:1,name : 'Shopping',cost : 400},
        {id:2,name : 'Repaying the cartel',cost : 500},
        {id:3,name : 'Laksmi Chit Fund',cost : 1500}
    ];

    return(
        <ul className = 'list-group'>
            {Expenses.map((expense)=>(
                <ExpenseItem id = {expense.id} name = {expense.name} cost = {expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;
