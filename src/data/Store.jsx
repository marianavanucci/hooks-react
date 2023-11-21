import React, { useState } from "react";

const inicialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(inicialState)

const Store = props => {
    const [ state, setState ] = useState(inicialState)

    function updateState (key, value) {
        setState ({
            ...state,
            [key]: value
        })
    }

    return (
        
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>
             { props.children}
        </AppContext.Provider>

    )
}

export default Store