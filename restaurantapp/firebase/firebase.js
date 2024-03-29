import app from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './config';

class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.db = app.firestore();
        this.db.settings({experimentalForceLongPolling: true});
    }
}
const firebase = new Firebase();
export default firebase;