import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Auth/SignUp';
import ValidateOtp from './Auth/ValidateOtp';
import ResturentPage from './Auth/MainPage';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<ValidateOtp />} />
      <Route path='/main' element={<ResturentPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
