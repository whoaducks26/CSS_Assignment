// Andrea Ng Sze Ying, S10265940B
// this is a virtual piano instrument that allows users to play notes using their keyboard

"use client";  

import "./instrument.styles.css";  
import { useState, useEffect } from "react";  

// key to note mapping (ocatve 4)
const keyMap = {
  a: 261.63, // C4
  w: 277.18, // C#4
  s: 293.66, // D4
  e: 311.13, // D#4
  d: 329.63, // E4
  f: 349.23, // F4
  t: 369.99, // F#4
  g: 392.00, // G4
  y: 415.30, // G#4
  h: 440.00, // A4
  u: 466.16, // A#4
  j: 493.88, // B4
  k: 523.25, // C5
};

export default function Piano() {
  // useState to manage active (pressed) keys and audio context
  const [activeKeys, setActiveKeys] = useState(new Set());  // track which keys are pressed
  const [audioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());  // create audio context
  const [oscillators, setOscillators] = useState({});  // store oscillators (sounds) for each pressed key
  const [octave, setOctave] = useState(4); // set octave

  useEffect(() => {
    // key pressed
    const handleKeyDown = (event) => {
      if (event.key === "[") {
        setOctave((prev) => Math.max(1, prev - 1)); // decrease octave by 1
      } else if (event.key === "]") {
        setOctave((prev) => Math.min(7, prev + 1)); // increase octave by 1
      } else if (keyMap[event.key] && !activeKeys.has(event.key)) { // check if key pressed corresponds to a note and if its not active
        setActiveKeys((prev) => new Set(prev).add(event.key));  // add key to active keys
        startNote(event.key);  // start sound for key pressed
      }
    };

    // key released
    const handleKeyUp = (event) => {
      // check if the key released corresponds to a note
      if (keyMap[event.key]) {
        setActiveKeys((prev) => {
          const newSet = new Set(prev);  // create new set of active keys from prev set
          newSet.delete(event.key);  // remove key released from new set
          return newSet;
        });
        stopNote(event.key);  // stop the sound for key released
      }
    };

    // event listeners for key presses and releases
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // cleanup function to remove event listeners when component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKeys, octave]);  // re-runs the effect if activeKeys changes

  // start playing a note
  const startNote = (key) => {
    // check if sounds for the key doesn't exist
    if (!oscillators[key]) {
      const oscillator = audioContext.createOscillator();  // create new sound
      const gainNode = audioContext.createGain();  // create a gain node for volume control
      const frequency = keyMap[key] * Math.pow(2, octave - 4); // modifies the frequency based on the octave
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime); // set sound frequency
      oscillator.connect(gainNode);  // connect sound to gain node
      gainNode.connect(audioContext.destination);  // connect gain node to audio context output
      oscillator.start();  // start sound

      // store sound and gainNode for later to stop the sound
      setOscillators((prev) => ({ ...prev, [key]: { oscillator, gainNode } }));
    }
  };

  // stop playing a note
  const stopNote = (key) => {
    // check if sound for the key exists
    if (oscillators[key]) {
      oscillators[key].oscillator.stop();  // stop sound
      
      // remove sound and gainNode from state
      setOscillators((prev) => {
        const newOscillators = { ...prev };
        delete newOscillators[key];  // delete key sound and gainNode
        return newOscillators;
      });
    }
  };

  return (
    <div className="piano-container">
      <div className="piano-info">
        <h1>Virtual Piano!</h1>
        <p>Use your keyboard to play the piano!
          <br />
          Press the keys shown on your keyboard to play the notes.
          <br />
          Press the keys shown to play notes.
          <br />
          Press "[" to lower octave by 1, "]" to raise octave by 1.
        </p>
        <p>Current Octave: {octave}</p>
      </div>
      <div className="piano-keyboard">
      {/* Render the piano keys */}
      {Object.keys(keyMap).map((key) => (
        <div
          key={key}
          className={`piano-key ${
            ["w", "e", "t", "y", "u"].includes(key) ? "black-key" : "white-key"
          } ${activeKeys.has(key) ? "active" : ""}`}
        >
          {key.toUpperCase()}
        </div>
      ))}
    </div>
    </div>
  );
}