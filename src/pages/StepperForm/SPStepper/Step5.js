import { Input, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Step5 = () => {
    const [paymentDetails, setPaymentDetails] = useState()

    const handleChange = (e) => {
        setPaymentDetails(e.target.value)
    }


    return (
        <div className="align-items-center">
            <div className="border_input form_type">
                <label htmlFor="">How do you wish to recieve payment?</label>
                <select onChange={handleChange}>
                    <option value="paypal">Paypal</option>
                    <option value="bank">Bank</option>
                </select>
            </div>
            {paymentDetails === 'bank' && <><div className="border_input form_type">
                <label htmlFor="">Name of the bank</label>
                <Input
                    className='p-0'
                    id="standard-adornment-password"
                    type='text'
                    // value={user.password}
                    name='password'
                    fullWidth
                    // placeholder='Enter Password'
                    // onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <AccountBalanceIcon />
                        </InputAdornment>
                    }
                />
            </div>
                <div className="border_input form_type">
                    <label htmlFor="">IBAN</label>
                    <input type="text" />
                </div><div className="border_input form_type">
                    <label htmlFor="">BIC</label>
                    <input type="text" />
                </div>
            </>}
            {paymentDetails === 'paypal' && <div className="border_input form_type">
                <label htmlFor="">PayPal email address</label>
                <input type="text" />
            </div>}


        </div>
    )
}

export default Step5