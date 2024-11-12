import React from 'react'
import { useLocalContext } from '../../context/context'
import { Avatar, Button, Dialog, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';
import './style.css';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

function JoinClass() {
    const { joinClassDialog, setJoinClassDialog } = useLocalContext();
    return (
        <div>
            <Dialog fullScreen
                open={joinClassDialog}
                onclose={() => setJoinClassDialog(false)}
            // TransitionComponent={Transition}
            >
                <div className='joinClass'>
                    <div className='joinClass__wrapper'>
                        <div className='joinClass__wrapper2'
                            onClick={() => setJoinClassDialog(false)}
                        >
                            <Close className="joinClass__svg" />
                            <div className="joinClass__topHead">Join Class</div>
                        </div>
                        <Button className='joinClass_btn' varient='container' color="primary">
                            Join
                        </Button>
                    </div>
                    <div className='joinClass__form'>
                        <p className='joinClass__formText'>
                            You're currently signed in as Logged in mail
                        </p>
                        <div className='joinClass__loginInfo'>
                            <div className='joinClass__classLeft'>
                                <Avatar />
                                <div className='joinClass__loginText'>
                                    <div className='joinClass__loginName'>XYZ</div>
                                    <div className='joinClass__loginEmail'>Mail</div>
                                </div>
                            </div>
                            {/* ****I want to remove this logout button no of this will just do later**** */}
                            <Button varient='outline' color='primary'>
                                Logout
                            </Button>
                        </div>
                    </div>
                    <div className='joinClass__form'>
                        <div style={{ fontSize: '1.25rem', color: '#3c4043' }}
                            className='joinClass__formText'>
                            Class Code
                        </div>
                        <div style={{ color: '#3c4043', marginTop: '5px' }}
                            className='joinClass__formText'>
                            Enter Code
                        </div>
                        <div className='joinClass__loginInfo'>
                            <TextField
                                id="outlined-basic"
                                label="Class Code"
                                variant='outlined' />
                            <TextField
                                id="outlined-basic"
                                label="Teacher's Email"
                                variant='outlined' />
                        </div>
                    </div>
                </div>

            </Dialog>
        </div>
    );
};

export default JoinClass
