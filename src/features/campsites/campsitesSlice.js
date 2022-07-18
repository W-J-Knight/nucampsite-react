import { CAMPSITES } from "../../app/shared/CAMPSITES";


export const selectAllCampsites = () => {
    // return an array of campsites
    return CAMPSITES;
}

// export const selectRandomCampsite = () => {
//     // return a random campsite
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]
// }

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(campsite => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured)
}