import React, { createContext, useContext, useState } from 'react';

type CounterContextType = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (context === undefined) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    return context;
};
