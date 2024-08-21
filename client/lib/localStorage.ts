// localStorage.ts
export const loadStateFromLocalStorage = (): any => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Failed to save state to localStorage', err);
  }
};
