import firebase from "../../../firebase";

export default class CatalogService {
  static async getCatalog() {
    const jewelryCollection = firebase.firestore().collection('products');
    const response = jewelryCollection.get();
    let jewelryList = [];
    (await response).docs.forEach((item) => {
      jewelryList.push({
        id: item.id,
        name: item.data().name,
        description: item.data().description,
        price: item.data().price,
      })
    })
    return jewelryList
  }
}
