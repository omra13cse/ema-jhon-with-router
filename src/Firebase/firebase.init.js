import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication =() =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/* steps for authentication
--------
Initiale set up
1.Firebase create project
2.create web app
3.get configuration
4.initialize Firebase
5.Enable Auth method
*/
// vugi