import React, { Component } from 'react';
import Home from "./comp/Home";
import DetailTovar from "./comp/DetailTovar";
import User from "./comp/User";
import Shopping from './comp/Shopping'
import SnapshotFirebase from './comp/SnapshotFirebase'
import SignUp from "./comp/signUp";
import SignIn from './comp/signIn';
import EditFirebase from "./comp/EditFirebase";

/*import { useAuthState } from "react-firebase-hooks/auth";*/

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux"

class App extends Component {




  render() {
    return (
      <div>

        <h1>{this.props.user}</h1>

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

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(App);
