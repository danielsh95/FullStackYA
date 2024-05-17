// Import the functions you need from the SDKs you need
import { addDoc, collection } from "firebase/firestore"
import db from "./firebase"

const addDocToCollection = (collectionName, obj) => {
    addDoc(collection(db, collectionName), obj)
}

export { addDocToCollection }