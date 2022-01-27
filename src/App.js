import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WithinAcc from './components/Transfers/WithinAcc';

function App() {
  return (
   <React.Fragment>
     <h1>Hi Deepak, Lets begin</h1>

     <BrowserRouter>
          

          <Routes>
            {/* <Route exact path="/" element={<WithinAccPreconfirm />} /> */}
            {/* <Route exact path="/WithinAccPreconfirm" element={<WithinAccPreconfirm />} /> */}
            <Route exact path="/WithinAccInitial" element={<WithinAcc />} />
            </Routes>
          
          </BrowserRouter>
   </React.Fragment>
   
  );
}

export default App;
