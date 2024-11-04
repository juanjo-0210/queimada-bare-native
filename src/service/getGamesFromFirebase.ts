
import {collection, db, getDocs, limit, orderBy, query} from '../api/firebaseConfig';
import { getArrayFromCollection } from '../utils/getArrayFromCollectionFirebase';

const collectionName = 'QueimadaDataSaved';

export const getGamesFromFirebase = async () => {
    const colRef = collection(db, collectionName);
    const res = getDocs(query(colRef, orderBy('name'), limit(20)));
    return getArrayFromCollection(res);
};

