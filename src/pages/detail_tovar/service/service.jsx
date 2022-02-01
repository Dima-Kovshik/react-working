import firebase from "../../../firebase";

export default class TovarService {

  static getDetail(id) {
    var tovar = [];
    var docRef = firebase.firestore().collection('products').doc(id);
    docRef.get().then((doc) => {
      tovar.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
      })

    });
    console.log(tovar)
    return tovar;



  }
}
