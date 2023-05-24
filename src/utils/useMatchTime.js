import { useEffect, useState } from 'react';

export default function useMatchTime({ oneMinuteMilliseconds }) {
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinute((prev) => {
        if (prev === 90) {
          return 90;
        }

        return prev + 1;
      });
    }, oneMinuteMilliseconds);

    return () => clearInterval(interval);
  }, []);

  return [minute, setMinute];
}
