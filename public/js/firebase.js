let firebaseConfig = {
    apiKey: "AIzaSyAH20qPJAR6bso3aN4wZGSe0nMwCNRz2r4",
    authDomain: "blogsite-1d461.firebaseapp.com",
    projectId: "blogsite-1d461",
    storageBucket: "blogsite-1d461.appspot.com",
    messagingSenderId: "754656795841",
    appId: "1:754656795841:web:6b1ca37c127c7ee75c8840",
    measurementId: "G-KS46WD9609"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}