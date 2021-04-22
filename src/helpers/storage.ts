import { useLocalStorage, keyStorage } from "./config";

export const setFavouriteGiphy = (id: string) => {
    if (useLocalStorage) {
        const listFavourites: any = (JSON.parse(localStorage.getItem(keyStorage) || '[]'));
        listFavourites.push(id);
        localStorage.setItem(keyStorage, JSON.stringify([...new Set(listFavourites)]))
    }
}


export const unSetFavouriteGiphy = (id: string) => {
    if (useLocalStorage) {
        let listFavourites = (JSON.parse(localStorage.getItem(keyStorage) || '[]'));
        listFavourites = listFavourites.filter((i: any) => i !== id)
        localStorage.setItem(keyStorage, JSON.stringify(listFavourites))
    }
}

export const getFavouriteGiphy = (): any[] => {
    if (useLocalStorage) {
        const listFavourites = (JSON.parse(localStorage.getItem(keyStorage) || '[]'));
        return listFavourites
    }
    return [];
}