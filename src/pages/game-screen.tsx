import * as React from 'react';
import { Slider } from '../components/slider';

export const GameScreen = () => {
  const [sliderValue, setSliderValue] = React.useState(100);

  const submitSliderInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sliderValue);
  };

  return (
    <>
      <h1>Frequency</h1>
      <form onSubmit={submitSliderInput}>
        <Slider initialValue={sliderValue} onChange={setSliderValue} />
        <p>{sliderValue}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
