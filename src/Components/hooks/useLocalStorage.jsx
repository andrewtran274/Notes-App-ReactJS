import { useState, useEffect } from "react";

export function useLocalStorage(key, intialValue) {
  const [state, setState] = useState(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue && localStorageValue !== "undefined") {
      return JSON.parse(localStorageValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
