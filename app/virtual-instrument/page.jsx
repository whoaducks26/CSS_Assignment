"use client";  

import "./instrument.styles.css";  
import { useState, useEffect } from "react";  

// key to note mapping
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
  // useState to manage active keys and audio context
  const [activeKeys, setActiveKeys] = useState(new Set());  // track which keys are active
  const [audioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());  // create audio context
  const [oscillators, setOscillators] = useState({});  // store oscillators for each active key

  useEffect(() => {
    // key press
    const handleKeyDown = (event) => {
      // check if key pressed corresponds to a note and if its not active
      if (keyMap[event.key] && !activeKeys.has(event.key)) {
        setActiveKeys((prev) => new Set(prev).add(event.key));  // add key to active keys
        startNote(event.key);  // start sound for key pressed
      }
    };

    // key release
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

    // event listeners for keydown and keyup events
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // cleanup function to remove event listeners when component is unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKeys]);  // re-runs the effect if activeKeys changes

  // start playing a note
  const startNote = (key) => {
    // check if oscillator for the key doesn't exist
    if (!oscillators[key]) {
      const oscillator = audioContext.createOscillator();  // create new oscillator
      const gainNode = audioContext.createGain();  // create a gain node for volume control
      oscillator.frequency.setValueAtTime(keyMap[key], audioContext.currentTime);  // set oscillator frequency
      oscillator.connect(gainNode);  // connect oscillator to gain node
      gainNode.connect(audioContext.destination);  // connect gain node to audio context output
      oscillator.start();  // start oscillator (sound starts)

      // store oscillator and gainNode for later to stop the sound
      setOscillators((prev) => ({ ...prev, [key]: { oscillator, gainNode } }));
    }
  };

  // stop playing a note
  const stopNote = (key) => {
    // check if oscillator for the key exists
    if (oscillators[key]) {
      oscillators[key].oscillator.stop();  // stop oscillator (sound stops)
      
      // remove oscillator and gainNode from state
      setOscillators((prev) => {
        const newOscillators = { ...prev };
        delete newOscillators[key];  // delete the key oscillator and gainNode
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
        </p>
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