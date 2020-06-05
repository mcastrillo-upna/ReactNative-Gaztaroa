import * as firebase from 'firebase';

export const baseUrl = "https://appgaztaroa-8ba7a.firebaseio.com/";
export const colorGaztaroaOscuro = '#015afc';
export const colorGaztaroaClaro = '#c2d3da';

const firebaseConfig = {
    apiKey: "AIzaSyDzFFltm2DUe55PFsBvpzVqe-lyRvuhk8Y",
    authDomain: "appgaztaroa-8ba7a.firebaseapp.com",
    databaseURL: "https://appgaztaroa-8ba7a.firebaseio.com",
    projectId: "appgaztaroa-8ba7a",
    storageBucket: "appgaztaroa-8ba7a.appspot.com",
    messagingSenderId: "942143311129",
    appId: "1:942143311129:web:e8ea45a10251c468560988"
  };

 // Si ya se ha exportado antes, no se vuelve a exportar
 export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();