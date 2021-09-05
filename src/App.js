import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/budget'
import Remaining from './components/remaining'
import Expensetotal from './components/Expensetotal';
import ExpenseList from './components/expenseList';
import AddExpense from './components/AddExpense';


const App = () => {
  return (
    <div className="App">
      <div className = 'container'>
        <h1 className = 'mt-3'>Spending Tracker 💵🤑</h1>
        <div className = 'row mt-3'>
          <div className = 'col-sm'>
            <Budget />

          </div>
        <div className = 'col-sm'>
          <Remaining/>
        </div>
        <div className = 'col-sm'>
          <Expensetotal />
        </div>
        </div>
        <h3 className = 'mt-3'>Expenses</h3>
        <div className = 'row-mt-3'>
          <div className = 'col-sm'>
            <ExpenseList />
          </div>
        </div>

        <h3 className = 'mt-3'> Add Expenses </h3>
        <div className = 'row-mt-3'>
          <div className = 'col-sm'>
            <AddExpense/>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
