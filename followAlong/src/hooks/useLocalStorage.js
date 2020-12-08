import {useState} from "react";

// Add localStorage power to useState (same functionality otherwise)

// Requirements:
// same format as useState from the component's perspective
// If the value is already saved in localStorage (e.g., form already started), use those values
// Otherwise, initialize with the initialValue passed in
// Then, every time we update state, also update localStorage to keep it in sync

export const useLocalStorage = (key, initialValue)
