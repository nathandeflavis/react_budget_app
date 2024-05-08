import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td>
            <TiPlus size='1.5em' class='bg-success text-bg-success rounded-circle' onClick={event=> increaseAllocation(props.name)}></TiPlus>
        </td>
        <td>
            <TiMinus size='1.5em' class='bg-danger text-bg-danger rounded-circle' onClick={event=> decreaseAllocation(props.name)}></TiMinus>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>

        </tr>
    );
};

export default ExpenseItem;