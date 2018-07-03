import Firebase from 'firebase' 

var config = {
  apiKey: "AIzaSyBO_E3KkjyWO2dXL3LNhP8KB74PorlVS1k",
  authDomain: "pizzeria-3e662.firebaseapp.com",
  databaseURL: "https://pizzeria-3e662.firebaseio.com",
  projectId: "pizzeria-3e662",
  storageBucket: "pizzeria-3e662.appspot.com",
  messagingSenderId: "309760414723"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
