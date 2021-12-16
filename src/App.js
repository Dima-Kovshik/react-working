import React from "react";
import Home from "./comp/Home";
import DetailTovar from "./comp/DetailTovar";
import Search from "./comp/Search";
import User from "./comp/User";
import Shopping from './comp/Shopping'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

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
          </ul>
        </nav>

        <Switch>


          <Route path="/user" element={<User />}>
            <User />
          </Route>
          <Route path="/shopping" element={<Shopping />}>
            <Shopping />
          </Route>
          <Route path="/" element={<Home />}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
