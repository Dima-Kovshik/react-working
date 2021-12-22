import React, { useState, useEffect, Fragment } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

function SnapshotFirebase() {
  const [products, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setTitle] = useState("");
  const [description, setDesc] = useState("");

  const ref = firebase.firestore().collection("products");

  //REALTIME GET FUNCTION
  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
  function addSchool(newSchool) {
    ref

      .add(newSchool)
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function deleteSchool(school) {
    ref
      .doc(school.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editSchool(updateSchool) {
    setLoading();
    ref
      .doc(updateSchool.id)
      .update(updateSchool)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Fragment>
      <h1>Schools (SNAPSHOT)</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={description} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addSchool({ name, description })}>
          Submit
        </button>
      </div>
      <hr />

      {products.map((school) => (
        <div className="school" key={school.id}>
          <h2>{school.name}</h2>
          <p>{school.description}</p>
          <div>
            <button onClick={() => deleteSchool(school)}>X</button>
            <button
              onClick={() =>
                editSchool({ name, description, id: school.id })
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default SnapshotFirebase;
