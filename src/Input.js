import React, { useRef } from 'react'
import colorNames from 'colornames';
import tinyColor from 'tinycolor2';

const Input = ({
    colourValue, setColourValue, hexValue, setHexValue, isDarkText, setIsDarkText
}) => {
    const inputRef = useRef();
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Colour Name</label>
            <input 
                ref={inputRef}
                autoFocus 
                required
                type='text' 
                placeholder='Add Colour Name' 
                value={colourValue}
                onChange={(e) => {
                    setColourValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                    let brightness = tinyColor(e.target.value).getBrightness();
                    if (e.target.value !== "black" && tinyColor(e.target.value).getBrightness() === 0) brightness = 255;
                    setIsDarkText(true ? brightness > 128 : false);
                    console.log(tinyColor(e.target.value).getBrightness())
                }}>
            </input>
            <button
                type="button"
                onClick={() => {
                    setIsDarkText(!isDarkText);
                    inputRef.current.focus();
                }}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default Input
