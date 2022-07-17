import { CAMPSITES } from "../../app/shared/CAMPSITES";


export const selectAllCampsites = () => {
    // return an array of campsite
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    // return a random campsite
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]
}