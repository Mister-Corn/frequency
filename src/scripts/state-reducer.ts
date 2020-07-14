import random from 'lodash/random';
enum GamePhases {
  NOT_IN_GAME,
  PSYCHIC,
  TEAM,
  LEFT_RIGHT,
  SCORING,
}

enum GameActions {
  START_GAME,
}

interface ReducerAction {
  type: GameActions;
}

interface FrequencyState {
  game: {
    round: number;
    phase: GamePhases;
    target: number;
    teamA: { score: number };
    teamB: { score: number };
  };
}

export const initialState: FrequencyState = {
  game: {
    round: 0,
    phase: GamePhases.NOT_IN_GAME,
    target: 0,
    teamA: { score: 0 },
    teamB: { score: 0 },
  },
};

export const reducer = (
  state: FrequencyState,
  action: ReducerAction
): FrequencyState => {
  switch (action.type) {
    case GameActions.START_GAME:
      return {
        game: {
          round: 1,
          phase: GamePhases.PSYCHIC,
          target: random(0, 200),
          teamA: { score: 0 },
          teamB: { score: 0 },
        },
      };

    default:
      console.error('Invalid Reducer Action');
      return state;
  }
};
