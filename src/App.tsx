/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashBoard/dashBoard';
import { HomePage } from './pages/homePage/home';
import { Login } from './pages/login/loginPage';
import Register from './pages/register/Register';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
