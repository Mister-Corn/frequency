import * as React from 'react';

interface SliderProps {
  initialValue: number;
  onChange?: (updatedValue: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = React.useState(initialValue);

  const sliderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setValue(value);

    if (onChange) {
      onChange(value);
    }
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
