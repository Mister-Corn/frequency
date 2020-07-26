import * as React from 'react';
import { Slider } from '../components/slider';
import { GameContext } from '../scripts/context-provider';
import { GameActions } from '../scripts/state-reducer';

export const GameScreen = () => {
  const {
    state: {
      game: { target },
    },
    dispatch,
  } = React.useContext(GameContext);
  const [sliderValue, setSliderValue] = React.useState(target);

  const submitSliderInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sliderValue);
  };

  React.useEffect(() => {
    dispatch({ type: GameActions.START_GAME });
  }, []);

  React.useEffect(() => {
    setSliderValue(target);
  }, [target]);

  return (
    <>
      <h1>Frequency</h1>
      <form onSubmit={submitSliderInput}>
        <Slider value={sliderValue} onChange={setSliderValue} />
        <p>{sliderValue}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
