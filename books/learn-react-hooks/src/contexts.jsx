import React,{createContext} from 'react';


export const ThemeContext = React.createContext({ primaryColor: 'deepskyblue', secondaryColor: 'coral' });

export const StateContext = createContext({
    state:{},
    dispath:()=>{}
});