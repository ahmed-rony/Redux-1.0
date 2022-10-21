import React, { useReducer, useRef } from 'react';
import { patientState, patintReducer } from '../../Reducer/PatientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patintReducer, patientState);
    const nameRef = useRef();
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            id: state.patients.legnth + 1,
            name: nameRef.current.value
        });
        nameRef.current.value = '';
    
    }
    return (
        <div>
            <h2>Patient Management: {state.patients.legnth}</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {/* {
                state.patients.map(pt => <li key={pt.id}>{pt.name}</li>)
            } */}
        </div>
    );
};

export default PatientManagement;