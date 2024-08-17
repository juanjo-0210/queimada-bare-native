import {addDoc, collection, db} from '../api/firebaseConfig'

const collectionName = 'QueimadaBoardGamesEnglish'

export interface InitialData {
    id: string;
    title: string;
}

interface DataStructure {
    description: string, 
    image: string, 
    maxplayers: string, 
    minplayers: string, 
    name: string,
    playingtime: string
}

export const setNewGame = async (obj: InitialData):Promise<string> => {
    const colRef = await collection(db, collectionName)
    const res = await addDoc(colRef, obj)
    return res.id
}

export const createGameData = async (obj: DataStructure):Promise<string> => {
    const colRef = await collection(db, collectionName)
    const res = await addDoc(colRef, obj)
    return res.id
}