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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    // Batch add items to Firestore database from our array
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        // Make me a new document object
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    // Store our data to the Firestore database
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    })

    return transformedCollection.reduce((accumlator, collection) => {
        accumlator[collection.title.toLowerCase()] = collection
        return accumlator
    }, {})
}

firebase.initializeApp(config)

// Minicking a non firebase API login system
export const getCurrentUser = () =>{
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
