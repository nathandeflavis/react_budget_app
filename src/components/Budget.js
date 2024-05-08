import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const Budget = (props) => {
    const { budget, expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);    
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        //Set the upper limit value to 20,000.
        let value = parseInt(event.target.value);
        let upperLimit = 20000;

        if(value > upperLimit) {
            window.alert('The value cannot exceed ' + Currency + upperLimit);
            return;
        }

        //It should not allow for the budget to be lower than the spending, as that is already allocated.

        if(value < totalExpenses) {
            window.alert('You cannot reduce the budget value lower than the spending');
            return;
        }

        setNewBudget(value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
