import React,{ useContext } from 'react';
import {AppContext} from '../context/AppContext';

import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ( { name,cost,id } ) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type : 'DELETE_EXPENSE',
            payload : id,
        });
    };
    return (
        <li className = 'list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>  
                <span className = 'badge badge-primary badge-pill mr-3'>
                 ₹ {cost} 

                </span>
            <TiDelete size = '1.5em' onClick = {handleDeleteExpense}/>
            </div> 

        </li>
    )
}

export default ExpenseItem;


 