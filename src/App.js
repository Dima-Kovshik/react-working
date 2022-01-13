import { useContext } from "react";
import Home from "./comp/Home";
import DetailTovar from "./comp/DetailTovar";
import User from "./comp/User";
import Shopping from './comp/Shopping'
import SnapshotFirebase from './comp/SnapshotFirebase'
import SignUp from "./comp/signUp";
import SignIn from './comp/signIn';
import EditFirebase from "./comp/EditFirebase";
import { ContextGlobal } from './comp/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  const { auth1 } = useContext(ContextGlobal);
  const { test } = useContext(ContextGlobal);
  const user = useAuthState(auth1);




  /*const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  function getProducts() {
    var test = [];
    var docRef = firebase.firestore().collection('products').doc(id);
    docRef.get().then((doc) => {
      test.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
      })
      console.log(test);
      setProducts(test);
      setLoading(false);
    });
    return test;

  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  } */



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

export default App;
