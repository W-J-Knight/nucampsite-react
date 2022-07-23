import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured)
}

export const selectAllPartners = () => {
    // return an array of campsites
    return PARTNERS;
}