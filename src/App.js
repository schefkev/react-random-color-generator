/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import col from 'randomcolor';
import randomColor from 'randomcolor';
import { useState } from 'react';

const button = css`
  background-color: yellow;
  border-radius: 8px;
  padding: 6px;
  width: 100px;
`;

export default function App() {
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const randColor = col.randomColor({
    hue: hue,
    luminosity: lum,
  });

  const [color, setColor] = useState(randomColor);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: 'grid',
          placeItems: 'center',
          marginBottom: '10px',
          background: color,
          // // Smooth Color Transition:
          transition: 'background 0.5s ease-in-out',
          padding: '3px',
        }}
      >
        Generated Color: {color}
      </div>
      <button
        onClick={() => {
          setColor(randColor);
          console.log('Generated Color:', randColor);
        }}
        css={button}
      >
        Generate
      </button>
      <div>
        <input
          placeholder="Hue:"
          value={hue}
          onChange={(e) => setHue(e.currentTarget.value)}
          style={{
            marginTop: '5px',
          }}
        />
      </div>
      <div>
        <input
          placeholder="Lum:"
          value={lum}
          onChange={(e) => setLum(e.currentTarget.value)}
          style={{
            marginTop: '5px',
          }}
        />
      </div>
      <div>
        <input
          placeholder="Width:"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.currentTarget.value)}
          style={{
            marginTop: '5px',
          }}
        />
      </div>
      <div>
        <input
          placeholder="Height:"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.currentTarget.value)}
          style={{
            marginTop: '5px',
          }}
        />
      </div>
    </div>
  );
}
