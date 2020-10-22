import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBHvDM95_4SYaWk4H9baTBMuUoeIinFN0s",
    authDomain: "crown-db-57aeb.firebaseapp.com",
    databaseURL: "https://crown-db-57aeb.firebaseio.com",
    projectId: "crown-db-57aeb",
    storageBucket: "crown-db-57aeb.appspot.com",
    messagingSenderId: "457759066944",
    appId: "1:457759066944:web:7d7391593a69ebbbc648a5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // check to see if user is logged in, if not return
    if (!userAuth) {
        return
    }

    // create snapshot of user creds to be stored in firebase database
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    // If user doesnt exist create new user
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            // Create the actual user document in our firebase database
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error){
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
