import firebase from  'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCCoRMfhDBRzj6rventrvFcac0AAxfjXMk",
    authDomain: "quora-8055b.firebaseapp.com",
    projectId: "quora-8055b",
    storageBucket: "quora-8055b.appspot.com",
    messagingSenderId: "880350108093",
    appId: "1:880350108093:web:0376ed0fc2f83de325dad4",
    measurementId: "G-E93940HH7R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)


  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db
