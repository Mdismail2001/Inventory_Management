
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PasswordReset from './pages/PasswordReset';
import PasswordResetOPT from './pages/PasswordResetOPT';
import SetPasswordPage from './pages/SetPasswordPage';
import DashBoard from './pages/DashBoard';
import Guard from './component/Guard';

function App() {

  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/reset-password-otp" element={<PasswordResetOPT />} />
              <Route path="/setnewpassword" element={<SetPasswordPage />}/>
              <Route element={<Guard/>}>

                <Route path="/dashboard" element={<DashBoard />} /> 
                
              </Route>           
            </Routes>
        </BrowserRouter>
    );

};

export default App
