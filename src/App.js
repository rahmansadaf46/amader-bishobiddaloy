import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddItem from "./components/Admin/AddItem/AddItem";
import AddQuestion from "./components/Admin/AddQuestion/AddQuestion";
import AddTeacher from "./components/Admin/AddTeacher/AddTeacher";
import AllItem from "./components/Admin/AllItem/AllItem";
import DeliveryOrder from "./components/Admin/DeliveryOrder/DeliveryOrder";
import PendingOrder from "./components/Admin/PendingOrder/PendingOrder";
import Checkout from "./components/Checkout/Checkout/Checkout";
import Exam from "./components/Home/Exam/Exam";
import Home from "./components/Home/Home/Home";
import SkillTest from "./components/Home/SkillTest/SkillTest";
import Item from "./components/Item/Item/Item";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import SignUp from "./components/Login/SignUp/SignUp";
import Shipment from "./components/Shipment/Shipment/Shipment";
import Appointment from "./components/Home/Appointment/Appointment";
import Opinion from "./components/User/Opinion/Opinion";
import TeacherProfile from "./components/Home/TeacherProfile/TeacherProfile";
import PendingAppointment from "./components/Admin/PendingAppointment/PendingAppointment";
import ApprovedAppointment from "./components/Admin/ApprovedAppointment/ApprovedAppointment";
import AppointmentStatus from "./components/User/AppointmentStatus/AppointmentStatus";
import OrderList from "./components/User/OrderList/OrderList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/skillTest">
           <SkillTest/>
          </Route>
          <Route path="/exam">
           <Exam/>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/item/:id">
            <Item></Item>
          </Route>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path="/user/appointment">
            <Appointment />
          </Route>
          <Route path="/user/teacher/:id">
            <TeacherProfile />
          </Route>
          <Route path="/admin/pending">
            <PendingOrder></PendingOrder>
          </Route>
          <Route path="/admin/delivery">
            <DeliveryOrder></DeliveryOrder>
          </Route>
          <Route path="/admin/pendingAppointment">
            <PendingAppointment />
          </Route>
          <Route path="/admin/approvedAppointment">
            <ApprovedAppointment />
          </Route>
          
          <Route path="/admin/addItem">
            <AddItem/>
          </Route>
          <Route path="/admin/itemList">
            <AllItem/>
          </Route>
          <Route path="/admin/addQuestion">
            <AddQuestion/>
          </Route>
          <Route path="/admin/addTeacher">
            <AddTeacher/>
          </Route>
          <Route path="/user/opinion">
            <Opinion/>
          </Route>
          <Route path="/user/appointmentStatus">
            <AppointmentStatus/>
          </Route>
          <Route path="/user/orderList">
            <OrderList/>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
