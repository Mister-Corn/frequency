import * as React from 'react';
import { Slider } from '../components/slider';

export const GameScreen = () => {
  const [sliderValue, setSliderValue] = React.useState(100);

  return (
    <>
      <h1>Frequency</h1>
      <Slider initialValue={sliderValue} onChange={setSliderValue} />
      <p>{sliderValue}</p>
    </>
  );
};
