
import {collection, db, getDocs, limit, query} from '../api/firebaseConfig'
import { getArrayFromCollection } from '../utils/getArrayFromCollectionFirebase'

const collectionName = 'QueimadaBoardGamesEnglish'

export const getGamesFromFirebase = async () => {
    const colRef = collection(db, collectionName)
    const res = getDocs(query(colRef, limit(20)))
    return getArrayFromCollection(res)
}

