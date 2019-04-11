import React from 'react';
import Shift from './Shift';

const Shiftlist = (props) => {
    const shifts = props.shifts.map((shift) => {
        return <Shift shift={shift} addToSaved={props.addToSaved} />
    });
    return <div>{shifts}</div>
}

export default Shiftlist;
