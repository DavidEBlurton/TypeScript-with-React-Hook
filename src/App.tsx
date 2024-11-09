// src/App.tsx

import React from 'react';
import Counter from './components/counter';
import { CounterProvider } from './components/counterContext';

const App: React.FC = () => {
    return (
        <CounterProvider>
            <div>
                <h1>Counter Application</h1>
                <Counter />
            </div>
        </CounterProvider>
    );
};

export default App;
