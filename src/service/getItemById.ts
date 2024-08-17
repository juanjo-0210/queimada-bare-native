import { db, doc, getDoc} from '../api/firebaseConfig'


const collectionName = "QueimadaBoardGamesEnglish"


export const getItemById = async (id = "00fLWcmRsGObGdYzxHiM") => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}