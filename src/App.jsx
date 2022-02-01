import React, { Component } from 'react';
import Home from "./pages/home/Home.jsx";
import DetailTovar from "./pages/detail_tovar/DetailTovar.jsx";
import User from "./comp/User.jsx";
import Shopping from './comp/Shopping.jsx'
import SnapshotFirebase from './comp/SnapshotFirebase.jsx'
import SignUp from "./comp/signUp.jsx";
import SignIn from './comp/signIn.jsx';
import EditFirebase from "./comp/EditFirebase.jsx";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";


class App extends Component {




  render() {
    return (
      <div>



        <Router>

          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>

                <li>
                  <Link to="/user">Информация пользователя</Link>
                </li>
                <li>
                  <Link to="/shopping">Корзина</Link>
                </li>
                <li>
                  <Link to="/add">add product</Link>
                </li>
                <li>
                  <Link to="/SignUp">Регистрация</Link>
                </li>
                <li>
                  <Link to="/SignIn">Авторизация</Link>
                </li>
              </ul>
            </nav>


            <Switch>


              <Route path="/user" element={<User />}>
                <User />
              </Route>
              <Route path="/shopping" element={<Shopping />}>
                <Shopping />
              </Route>
              <Route path="/add" element={<SnapshotFirebase />}>
                <SnapshotFirebase />
              </Route>
              <Route path="/SignUp" element={<SignUp />}>
                <SignUp />
              </Route>
              <Route path="/SignIn" element={<SignIn />}>
                <SignIn />
              </Route>
              <Route path="/product/:id" element={<DetailTovar />}>
                <DetailTovar />
              </Route>
              <Route path="/edit/:id" element={<EditFirebase />}>
                <EditFirebase />
              </Route>

              <Route path="/" element={<Home />}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}



export default App;
