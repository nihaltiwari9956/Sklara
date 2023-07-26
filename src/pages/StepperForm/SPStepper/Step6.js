import React from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Input, InputAdornment } from '@material-ui/core';
import { Visibility } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Step6 = () => {
    const [values, setValues] = React.useState({

        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <div className='col-md-4 coll-sm-10 m-auto px-5'>
            <div className="border_input mx-0">
                <label htmlFor="">New Password</label>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    fullWidth
                    placeholder='lorem'
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <VisibilityOffIcon /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
            <div className="border_input mx-0">
                <label htmlFor="">Confirm New Password</label>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    fullWidth
                    placeholder='lorem'
                    onChange={handleChange('cpassword')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <VisibilityOffIcon /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {/* <input type="text" placeholder='Lorem' /><VisibilityOffIcon /> */}
            </div>
            <button className='btn px-3 py-2 btn-primary round_btn' style={{ "padding": "0 20px", fontWeight: '600', width: '100%' }}>Continue</button>

        </div>
    )
}

export default Step6