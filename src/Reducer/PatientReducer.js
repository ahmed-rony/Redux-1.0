// export const initialState = {
export const patientState = {  // name changed ^ ;
    patients: []
};
// console.log(patientState.patients);

export const patintReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatient = {...state.patients, newPatient};
            return { patients: allPatient };
        case 'REMOVE_PATIENT':
            return state;
    
        default:
            return state;
    }
}