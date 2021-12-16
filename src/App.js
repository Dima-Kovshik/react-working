import React from "react";
import Catalog from "./comp/Catalog";
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
              <Link to="/">Каталог товаров</Link>
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
          <Route path="/" element={<Catalog />}>
            <Catalog />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
