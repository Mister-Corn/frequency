import random from 'lodash/random';
export enum GamePhases {
  NOT_IN_GAME,
  PSYCHIC,
  TEAM,
  LEFT_RIGHT,
  SCORING,
}

export enum GameActions {
  START_GAME,
}

export interface ReducerAction {
  type: GameActions;
}

export interface FrequencyState {
  game: {
    round: number;
    phase: GamePhases;
    target: number;
    teamA: { score: number };
    teamB: { score: number };
  };
}

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
