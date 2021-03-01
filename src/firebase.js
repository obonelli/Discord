import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCpubaLLWATN7QoU7R9ZPdrBIrWLxmQDqw",
    authDomain: "discord-clone-yt-a3156.firebaseapp.com",
    projectId: "discord-clone-yt-a3156",
    storageBucket: "discord-clone-yt-a3156.appspot.com",
    messagingSenderId: "49645372384",
    appId: "1:49645372384:web:a2803c661f2474a6f9a185",
    measurementId: "G-K47PC3GR3E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;