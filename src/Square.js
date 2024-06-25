import React from 'react'

const Square = ({colourValue, hexValue, isDarkText}) => {
  return (
    <div
      className='square'
      style={{
        backgroundColor: colourValue ? hexValue : "white",
        color: isDarkText ? "#000" : "#FFF"
      }}
    >
      <p>{colourValue ? colourValue : 'Empty Value'}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

Square.defaultProps = {
  colourValue: ""
}

export default Square
