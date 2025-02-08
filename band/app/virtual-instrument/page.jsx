"use client";

import React, { useEffect } from "react";
import styles from './instrument.styles.css'

const VirtualInstrument = () => {
  // Mapping of keyboard keys to their corresponding frequencies (in Hz).
  const keyMapping = {
    a: 130.81, // C note (octave 3)
    s: 146.83, // D note
    d: 164.81, // E note
    f: 174.61, // F note
    g: 196.00, // G note
    h: 220.00, // A note
    j: 246.94, // B note
    k: 261.63  // High C note (C2)
  };

  // Create a new AudioContext to manage and control audio playback
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Store active oscillators to manage key releases
  const activeOscillators = {};

  // Function that will generate sound when a key is pressed
  const playSound = (key) => {
    const frequency = keyMapping[key];

    if (frequency && !activeOscillators[key]) {
      // Create an oscillator node to generate sound (Square wave for sharper sound)
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'square';  // Using square wave for sharper sound
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);  // Set the frequency of the note

      // Create a gain node to control the volume
      const gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(1, audioContext.currentTime);  // Full volume, adjust if needed

      // Create a low-pass filter to keep the sound muted but still sharp
      const lowPassFilter = audioContext.createBiquadFilter();
      lowPassFilter.type = 'lowpass';  // Low-pass filter to block higher frequencies
      lowPassFilter.frequency.setValueAtTime(800, audioContext.currentTime);  // Set cutoff frequency higher than before (to allow more high frequencies through)

      // Connect the oscillator to the filter, then the filter to the gain node, and then the gain node to the audio context destination (speakers)
      oscillator.connect(lowPassFilter);
      lowPassFilter.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Start the oscillator immediately
      oscillator.start();

      // Store the active oscillator so we can control it later
      activeOscillators[key] = { oscillator, gainNode, lowPassFilter };

      // Smooth fade-in effect (optional for smoother start)
      gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.1);  // Fade to full volume
    }
  };

  // Function that stops the sound when the key is released
  const stopSound = (key) => {
    const activeSound = activeOscillators[key];

    if (activeSound) {
      const { oscillator, gainNode } = activeSound;

      // Fade out the sound more gradually (make fade-out time longer for smoother stop)
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);  // Smoother fade-out over 0.5 seconds

      // Stop the oscillator after the fade-out
      oscillator.stop(audioContext.currentTime + 0.5); // Stop after the fade-out

      // Remove the oscillator from active ones
      delete activeOscillators[key];
    }
  };

  // useEffect hook allows us to set up event listeners after the component mounts
  useEffect(() => {
    // Define what happens when a key is pressed
    const handleKeydown = (event) => {
      const key = event.key.toLowerCase();

      // Play sound for the key
      playSound(key);
    };

    // Define what happens when a key is released
    const handleKeyup = (event) => {
      const key = event.key.toLowerCase();

      // Stop sound for the key
      stopSound(key);
    };

    // Add event listeners to the window for keydown and keyup events (whenever a key is pressed or released)
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);

    // Cleanup: Remove the event listeners when the component is unmounted (important to avoid memory leaks)
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, []);  // The empty array [] ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1>Virtual Instrument - Press Keys to Play</h1>
      <p>Use the keys A, S, D, F, G, H, J, K to play trumpet notes.</p>
    </div>
  );
};

export default VirtualInstrument;
