import { useState } from 'react';

const useTargetState = () => {
  const initialState = { id: undefined, location: {} };
  const [selectedTarget, setSelectedTarget] = useState(initialState);

  const resetSelectedTarget = () => setSelectedTarget(initialState);

  return [resetSelectedTarget, selectedTarget, setSelectedTarget];
};

export default useTargetState;
