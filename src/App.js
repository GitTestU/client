import "./App.css";
import Login from "./pages/loginUser";
import ForgotPassword from "./pages/forgot-password";
import Register from "./pages/registerUser";
import { Route, Routes } from "react-router-dom";
import { useStateManage } from "./store/store";
import Dashboard from "./pages/userDashboard";
import { AddCar } from "./component/car/AddCar";
import { Car } from "./pages/car";
import MenuBar from "./pages/menubar";
import Payment from "./pages/payment";
import CreditCard from "./component/payment/CreditCard";
import Form from "./component/payment/form";
import DenemeimageUpload from "./pages/denemeimageUpload";
import Deneme from "../src/component/carImage/deneme"
function App() {
  const isLoggedIn = useStateManage((state) => state.isLoggedIn);
  const addCar = useStateManage((state) => state.addCar);
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car" element={addCar ? <AddCar /> : <Car />} />
        <Route path="/menu" element={<MenuBar />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/credi" element={<CreditCard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/image" element={<DenemeimageUpload/>} />
        <Route path="/deneme" element={<Deneme/>}/>
      </Routes>
    </>
  );
}

export default App;
