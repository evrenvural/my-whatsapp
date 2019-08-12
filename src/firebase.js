import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDTjZSOVnubVoZ4hy1uiX2gI2i5O3np58A",
    authDomain: "my-whatsapp-a8771.firebaseapp.com",
    databaseURL: "https://my-whatsapp-a8771.firebaseio.com",
    projectId: "my-whatsapp-a8771",
    storageBucket: "my-whatsapp-a8771.appspot.com",
    messagingSenderId: "782392975177",
    appId: "1:782392975177:web:b574ff77d1be3141"
}

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const messagesRef = databaseRef.child("messages");