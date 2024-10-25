// This code is the RangeSlider component, consisting of a styled input slider
import React, { useState } from "react";
import tinygradient from "tinygradient";
import styles from "./RangeSlider.module.css";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  initialValue?: number;
  name: string;
  id: string;
  value: number;
  setValue: (newValue: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  value,
  setValue,
  min,
  max,
  step,
  initialValue = min,
  name,
  id,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;
  // hsv interpolation for gradient
  const gradient = tinygradient([
    { color: "hsv(100, 55%, 90%)", pos: 0 },
    { color: "hsv(46, 58%, 100%)", pos: 0.5 },
    { color: "hsv(352, 61%, 99%)", pos: 1 },
  ]);
  const colorsHsv = gradient.hsv(10, true);
  const currentColor =
    colorsHsv[
      Math.floor((percentage / 100) * (colorsHsv.length - 1))
    ].toHexString();
  // background of the slider essentially sets up a linear gradient using tinygradient, then changes to white after the thumb
  const sliderBackground = `linear-gradient(to right, ${gradient
    .hsvAt(0)
    .toHexString()} 0%, ${currentColor} ${percentage}%, white ${percentage}%, white 100%)`;

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          name={name}
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={styles.slider}
          style={
            {
              "--slider-background": sliderBackground,
              "--thumb-background": currentColor,
            } as React.CSSProperties
          }
        />
        <div className={styles.ticks}>
          {[0, 25.7, 50, 74.3, 100].map((tick, index) => (
            <div
              key={index}
              className={styles.tick}
              style={{ left: `${tick}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
