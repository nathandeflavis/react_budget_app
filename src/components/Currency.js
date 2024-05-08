//Update the code to change the currency along with the drop-down option.
import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import { Dropdown } from "bootstrap";

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    };

    /* Add a Currency label in the appropriate place.
     * Stylize the dropdown.
     * Add these four currencies: $ Dollar,£ Pound,€ Euro,₹ Rupee.
     */
    return (
        <div class="alert alert-secondary">
            <label for="Currency">Currency:</label>
            <select class="form-select bg-success text-bg-success" name="Currency" id="Currency" onChange={(event) => {
                changeCurrency(event.target.value);
            }}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>	
        </div>
    );
};

export default Currency;