import {useState} from "react";

// Add localStorage power to useState (same functionality otherwise)

// Requirements:
// same format as useState from the component's perspective
// If the value is already saved in localStorage (e.g., form already started), use those values
// Otherwise, initialize with the initialValue passed in
// Then, every time we update state, also update localStorage to keep it in sync

export const useLocalStorage = (key, initialValue) => {
  // Part one: initialization step
  // If the value is in localStorage, use it. Otherwise use initial value
  const [storedValue, setStoredValue] = useState(() => {
  if (window.localStorage.getItem(key)) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  window.localStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
  });

  // Part two: also update localStorage every time state is update

  return [storedValue, setValue];
}
