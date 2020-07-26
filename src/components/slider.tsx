import * as React from 'react';
import { doNothing } from '../utils/functions';

interface SliderProps {
  value: number;
  onChange?: (updatedValue: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange = doNothing,
}) => {
  const sliderOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = Number(event.target.value);
    onChange(value);
  };

  return (
    <input
      type="range"
      name="frequency"
      min="0"
      max="200"
      value={value}
      onChange={sliderOnChange}
    />
  );
};
