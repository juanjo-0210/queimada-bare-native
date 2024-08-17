import {collection, db, getDocs, limit, query, where} from '../api/firebaseConfig'
import { getArrayFromCollection } from '../utils/getArrayFromCollectionFirebase'

const collectionName = 'QueimadaBoardGamesEnglish'

export const searchQueryData = async (value: string) => {
    const colRef = collection(db, collectionName)
    const res = getDocs(query(colRef, where("title", ">=", value), limit(20)))
    return getArrayFromCollection(res)
}