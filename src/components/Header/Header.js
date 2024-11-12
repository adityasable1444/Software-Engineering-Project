/*import { AppBar,Toolbar,Typography } from '@mui/material';  //@material-ui/core
import React from 'react'
import { useStyles } from './style'
import { Add } from '@mui/icons-material';

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.headerWrapper}>
                        <Typography variant="h6" className={classes.title}>
                            HI
                        </Typography>
                    </div>
                    
                    <div className={classes.header_wrapper_right}>
                        <Add />
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    );
};

export default Header;
*/

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import { Add } from '@mui/icons-material';
// import { Avatar } from '@mui/material';
// // import { useStyles } from './style'

// function Header({ onAddClick }) {
// // const classes = useStyles()
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Header Title
//         </Typography>
//         <IconButton 
//           color="inherit" 
//           aria-label="add" 
//           onClick={onAddClick}
//         >
//             <div>
//             <Add />
//             </div>
          
//           <div>
//           <Avatar />
//           </div>
            
          

//         </IconButton>


//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;



import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Add } from '@mui/icons-material';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useLocalContext } from '../../context/context';
// import CreateClass from '../CreateClass/CreateClass';
// import JoinClass from '../JoinClass/JoinClass';
import {CreateClass,JoinClass} from "..";

function Header({ onAddClick }) {
  
  const [anchorEl,setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null); 

  const { setCreateClassDialog,setJoinClassDialog } = useLocalContext();

  const handleCreate =()=>{
    handleClose()
    setCreateClassDialog(true)
  }

  const handleJoin = ()=>{
    handleClose();
    setJoinClassDialog(true);
  }

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Header Title
        </Typography>
        
        {/* Add Icon with spacing */}
        <IconButton 
          color="inherit" 
          aria-label="add" 
          onClick={onAddClick}
          sx={{ mr: 2 }} // Adds right margin for spacing
        >
          <Add onClick={handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleJoin}>Join Class</MenuItem>
            <MenuItem onClick={handleCreate}>Create Class</MenuItem>
          </Menu>
        </IconButton>
        
        {/* Avatar Icon */}
        <IconButton color="inherit" aria-label="profile">
          <Avatar />
        </IconButton>

      </Toolbar>
    </AppBar>

    <CreateClass/>
    <JoinClass/>
    </>
  );
};

export default Header;

