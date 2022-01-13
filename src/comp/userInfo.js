import firebase from "./firebase";

import "firebase/firestore";

export default class getSchoolData {
  static async getLessons() {
    const jewelryCollection = firebase.firestore().collection('users');
    const response = jewelryCollection.get();
    let jewelryList = [];
    (await response).docs.forEach((item) => {
      jewelryList.push({
        id: item.id,
        firstName: item.data().first_name,
        lastName: item.data().last_name,
      })
    })
    return jewelryList
  }
}
