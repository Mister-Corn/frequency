import * as React from 'react';
import { FrequencyState, GamePhases, reducer } from './state-reducer';
import { doNothing } from '../utils/functions';

const initialState: FrequencyState = {
  game: {
    round: 0,
    phase: GamePhases.NOT_IN_GAME,
    target: 0,
    teamA: { score: 0 },
    teamB: { score: 0 },
  },
};

export const GameContext = React.createContext<{
  state: FrequencyState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: doNothing,
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
