import * as React from 'react';
import './App.css';
import { GameScreen } from './pages/game-screen';
import { ContextProvider } from './scripts/context-provider';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <GameScreen />
      </div>
    </ContextProvider>
  );
}

export default App;
