/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashBoard/dashBoard';
import { HomePage } from './pages/homePage/home';
import { Login } from './pages/login/loginPage';
import { Register } from './pages/register/register';
import { Step1 } from './pages/register/funnelForm/step1';
import { Step2 } from './pages/register/funnelForm/step2 ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/step1" element={<Step1 />} />
      <Route path="/register/step2" element={<Step2 />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
