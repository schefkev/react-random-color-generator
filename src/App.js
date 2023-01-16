import col from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const randColor = col.randomColor({
    hue: hue,
    luminosity: lum,
  });

  const [color, setColor] = useState(randColor);
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
          // Smooth Color Transition:
          transition: 'background 0.5s ease-in-out',
          padding: '3px',
        }}
      >
        Generated Color: {color}
      </div>
      <div>
        <input
          placeholder="Hue:"
          type="text"
          value={hue}
          onChange={(e) => setHue(e.target.value)}
          style={{
            marginTop: '5px',
          }}
        />
      </div>
      <div>
        <input
          placeholder="Lum:"
          type="text"
          value={lum}
          onChange={(e) => setLum(e.target.value)}
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
          onChange={(e) => setWidth(e.target.value)}
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
          onChange={(e) => setHeight(e.target.value)}
          style={{
            marginTop: '5px',
          }}
        />
      </div>
      <button
        onClick={() => {
          setColor(randColor);
          console.log('Generated Color:', randColor);
        }}
        style={{
          marginTop: '10px',
        }}
      >
        Generate
      </button>
    </div>
  );
}
