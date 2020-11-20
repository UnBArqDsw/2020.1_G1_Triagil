import { RESET_TRIAGE, HEADACHE_TRIAGE, SORETHROAT_TRIAGE, DIARRHEA_TRIAGE, 
FAINTING_TRIAGE, CONVULSION_TRIAGE } from './types';


export const resetTriage = () => ({
    type: RESET_TRIAGE,
});

export const headacheTriage = (headacheInfo) => ({
    type: HEADACHE_TRIAGE,
    payload: headacheInfo,
});

export const soreThroatTriage = (sorethroatInfo) => ({
    type: SORETHROAT_TRIAGE,
    payload: sorethroatInfo,
});

export const diarrheaTriage = (diarrheaInfo) => ({
    type: DIARRHEA_TRIAGE,
    payload: diarrheaInfo,
});

export const faintingTriage = (faintingInfo) => ({
    type: FAINTING_TRIAGE,
    payload: faintingInfo,
});

export const convulsionTriage = (convulsionInfo) => ({
    type: CONVULSION_TRIAGE,
    payload: convulsionInfo,
});