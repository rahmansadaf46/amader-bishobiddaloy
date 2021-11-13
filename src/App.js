import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddItem from "./components/Admin/AddItem/AddItem";
import AddQuestion from "./components/Admin/AddQuestion/AddQuestion";
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
          <Route path="/admin/pending">
            <PendingOrder></PendingOrder>
          </Route>
          <Route path="/admin/delivery">
            <DeliveryOrder></DeliveryOrder>
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
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
