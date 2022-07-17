import { CAMPSITES } from "../../app/shared/CAMPSITES";


export const selectAllCampsites = () => {
    // return an array of campsites
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    // return a random campsite
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]
}