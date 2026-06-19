import { useEffect, useState } from 'react';

export const useEnter = (delay = 0): boolean => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setEntered(true), 20 + delay);
    return () => clearTimeout(id);
  }, [delay]);

  return entered;
};
