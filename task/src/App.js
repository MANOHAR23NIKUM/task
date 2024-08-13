// import './App.css';
// import React,{createContext} from 'react';
// import FirstQu from './components/FirstQu';
// import ControlledComp from './components/ControlledComp';
// import ForthQu from './components/ForthQu';

// export const Context = createContext();

// const App=()=> {
//    const contextValue={
//    img:"../images/bird1.jpg",
//     alt:"bird image",
//      title:"white bird"

//   }
//   return (
//       <Context.Provider value={contextValue}>
//         <FirstQu/>
//       </Context.Provider>
//        );

// };

import React from 'react';
import ForthQu from './components/ForthQu';

const App = () =>{
  return(
    <>
    {/* <ControlledComp/> */}
    <ForthQu/>
    </>
  )
}

export default App;
