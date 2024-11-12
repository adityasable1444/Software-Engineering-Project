import { Button, DialogActions, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <p className='class__title'>Create Class</p>

            <div className='form__input'>
                <TextField id="filled-basic" label="Class Name (required)"
                    className='form__input'
                    varient="filled"
                />

                <TextField id="filled-basic" label="Section"
                    className='form__input'
                    varient="filled"
                />

                <TextField id="filled-basic" label="Subject"
                    className='form__input'
                    varient="filled"
                />

                <TextField id="filled-basic" label="Room"
                    className='form__input'
                    varient="filled"
                />

            </div>
            <DialogActions>
                <Button color='primary'>
                    Create Class
                </Button>
            </DialogActions>
        </div>
    )
}

export default Form
