import React, { useContext } from 'react';
import { StateContext } from '../contexts';

export default function (context = StateContext) {
    const { dispatch } = useContext(context);
    return dispatch;
}

