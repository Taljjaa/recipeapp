import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC6MCRHS97zockvelv7qVquqHw0Z2DxMFE',
  authDomain: 'recipeapp-4b367.firebaseapp.com',
  databaseURL: 'https://recipeapp-4b367.firebaseio.com',
  projectId: 'recipeapp-4b367',
  storageBucket: 'recipeapp-4b367.appspot.com',
  messagingSenderId: '598773109468',
};

firebase.initializeApp(config)

export { firebase };