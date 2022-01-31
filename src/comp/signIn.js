
import React, { useState } from "react";
import firebase from "./firebase";
import "firebase/compat/auth"

export var test = {};


const SignIn = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");




  const signIn = () => {

    firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then(async (resp) => {
        await firebase.firestore().collection('users').doc(resp.user.uid)
          .get().then((doc) => {
            test = {
              id: doc.id,
              firstName: doc.data().first_name,
              lastName: doc.data().last_name,
            }

          })
        console.log(test);
      })
  }

  return (
    <div className="container">

      <h5>Авторизация</h5>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>
      <div>
        <button onClick={signIn}>Войти</button>
      </div>

    </div>
  )
}


export default SignIn
