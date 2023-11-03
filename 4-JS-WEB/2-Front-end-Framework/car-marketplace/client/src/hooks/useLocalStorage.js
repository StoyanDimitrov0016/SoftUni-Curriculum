import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);

        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);
            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);
        
        //TODO: If value a function set local storage to its executed value
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [state, setLocalStorageState];
};