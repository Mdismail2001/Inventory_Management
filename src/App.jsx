
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage />} />

            </Routes>
        </BrowserRouter>
        // <div/>>
    );

};

export default App
