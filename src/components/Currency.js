//Update the code to change the currency along with the drop-down option.
import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import { Dropdown } from "bootstrap";

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
        setNewCurrency(value);
    };

    /* Add a Currency label in the appropriate place.
     * Stylize the dropdown.
     * Add these four currencies: $ Dollar,£ Pound,€ Euro,₹ Rupee.
     */
    let onClick = (event) => {
        changeCurrency(event.target.value);
    };

    return (
        <div class="dropdown">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                Currency ({newCurrency})
            </button>
            <div class="dropdown-menu bg-success">
                <button value='$ Dollar' class="dropdown-item" onClick={onClick}>$ Dollar</button>
                <button value='£ Pound' class="dropdown-item" onClick={onClick}>£ Pound</button>
                <button value='€ Euro' class="dropdown-item" onClick={onClick}>€ Euro</button>
                <button value='₹ Rupee' class="dropdown-item" onClick={onClick}>₹ Rupee</button>
            </div>
        </div>
    );
};

export default Currency;