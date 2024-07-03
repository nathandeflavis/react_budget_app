import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);    
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        //Set the upper limit value to 20,000.
        let value = parseInt(event.target.value);
        let upperLimit = 20000;

        if(value > upperLimit) {
            window.alert('The value cannot exceed ' + currency[0] + upperLimit);
            return;
        }

        //It should not allow for the budget to be lower than the spending, as that is already allocated.

        if(value < totalExpenses) {
            window.alert('You cannot reduce the budget value lower than the spending');
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });

        setNewBudget(value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency[0]}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
