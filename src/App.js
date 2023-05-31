import './App.css';
import Login from './pages/login'
import ForgotPassword from './pages/forgot-password';
import Register from './pages/register';
import {Route , Routes } from "react-router-dom";
import { useStateManage } from './store/store';
function App() {
  const isLoggedIn = useStateManage((state) => state.isLoggedIn);
  return (
    <>
      <Routes>
        <Route path='/' element ={<Login/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
