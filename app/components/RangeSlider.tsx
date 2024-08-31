import React, { useState } from 'react';
import tinygradient from 'tinygradient';

interface RangeSliderProps {
    min: number;
    max: number;
    step: number;
    initialValue?: number;
    onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step, initialValue = min, onChange }) => {
    const [value, setValue] = useState<number>(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onChange(newValue);
    };

    const percentage = ((value - min) / (max - min)) * 100;

    // gradient for progress track
    const gradient = tinygradient("#90E568", "#FFDC6A", "#FD6376");
    const currentColor = gradient.rgbAt(percentage / 100).toHexString();

    const sliderStyle = {
        background: `linear-gradient(to right, ${gradient.rgbAt(0).toHexString()} 0%, ${currentColor} ${percentage}%, white ${percentage}%, white 100%)`,
        height: '15px',
        border: '1px solid',
        borderRadius: '16px',
        appearance: 'none',
        cursor: 'pointer',
        position: 'relative',
    };

    const thumbStyle = {
        width: '15px',
        height: '45px',
        backgroundColor: currentColor, // so the thumb changes color with the progress track
        borderRadius: '16px',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
    };

    return (
        <div className="bg-gray-950 p-10 rounded-lg shadow-lg">
            <div className="slider-container relative">
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={handleChange}
                    className="w-full"
                    style={sliderStyle}
                    style={{ ...sliderStyle, '--thumb-background': currentColor }}
                />
                <div className="ticks absolute top-0 left-0 w-full h-full pointer-events-none">
                    {[0, 25.7, 50, 74.3, 100].map((tick, index) => (
                        <div 
                            key={index} 
                            className="tick absolute w-0.5 h-6 bg-white -translate-x-1/2 -translate-y-1/4"
                            style={{
                                left: `calc(${tick}%)`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                input[type="range"] {
                    -webkit-appearance: none;
                    border-radius: 16px;
                    width: 100%;
                    height: 15px;
                }

                input[type="range"]::-webkit-slider-runnable-track {
                    ${Object.entries(sliderStyle)
                      .map(([key, value]) => `${key}: ${value};`)
                      .join(' ')}
                    position: relative;
                }

                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 15px;
                    height: 45px;
                    background-color: var(--thumb-background);
                    border-radius: 16px;
                    border: none;
                    cursor: pointer;
                    position: relative;
                }

                input[type="range"]::-moz-range-thumb {
                    -webkit-appearance: none;
                    width: 15px;
                    height: 45px;
                    background-color: var(--thumb-background);
                    border-radius: 16px;
                    border: none;
                    cursor: pointer;
                    position: relative;
                }
            `}</style>
        </div>
    );
};

export default RangeSlider;
