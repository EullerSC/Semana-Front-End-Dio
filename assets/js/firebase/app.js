  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzrYPh7FZJnWZrSYwFj8JyA2DAnt0awV0",
    authDomain: "dungeons-e-dragons-database.firebaseapp.com",
    projectId: "dungeons-e-dragons-database",
    storageBucket: "dungeons-e-dragons-database.appspot.com",
    messagingSenderId: "464633857912",
    appId: "1:464633857912:web:dde9b345bdc309bdb56a8d"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)


  export default app 