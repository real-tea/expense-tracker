import React, { useState } from 'react';

const AddExpense = () => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSumbit = (event) =>{}
    return (
        <form>
            <div className = 'row'> 
            <div className = 'col-sm'> 
                <label for = 'name'>Name</label>

                <input 
                    required = 'required'
                    type = 'text'
                    className = 'form-control'
                    id = 'name'></input>
            </div>
            <div className = 'col-sm'>
                <label for = 'cost'>Cost</label>

                <input 
                    required = 'required'
                    type = 'text'
                    className = 'form-control'
                    id = 'cost'></input>

            </div>
            </div>

            <div className = 'row'>
                <div className = 'col-sm'>
                    <button type = 'submit' className = 'btn btn-primary mt-3'>
                        Save
                    </button>
                </div>

            </div>
            

        </form>
    )
}


export default AddExpense;