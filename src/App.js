import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/budget'
import Remaining from './components/remaining'
import Expensetotal from './components/Expensetotal';


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
      </div>

      
    </div>
  );
}

export default App;
