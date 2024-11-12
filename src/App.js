// import React from "react";
// import { Drawer } from "./components"; //Here we got the drawer but we have to remove
// import { Header } from "./components"; //Here we got the drawer but we have to remove

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Header, JoinedClasses, Login } from "./components";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Login } from '@mui/icons-material';
function App() {


  return (
    // <Router>
    //   <Switch>
    //     <Route exact path='/'>
    <>
      <Header />
      <ol className='joined'>
        <JoinedClasses />
      </ol>
    </>
    //     </Route>
    //     <Route path='/login'>
    //       <Login />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
