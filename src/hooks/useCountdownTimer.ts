import { useEffect, useState } from 'react';

export const useCountdownTimer = (defaultTimeInSeconds: number) => {
  const [timer, setTimer] = useState<number>(defaultTimeInSeconds);

  const isTimerFinished = (): boolean => {
    return timer === 0;
  };

  const resetTimer = (): void => {
    setTimer(0);
  };

  const getTimerMinutes = (): number => {
    return Math.floor(timer / 60);
  };

  const getTimerSeconds = (): number => {
    return Math.floor(timer % 60);
  };

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    if (timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timer]);

  const getTimerTimeString = () => {
    const timerMinutes = getTimerMinutes();
    const timerMinutesString =
      timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes.toString();
    const timerSeconds = getTimerSeconds();

    const timerSecondsString =
      timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds.toString();
    return `${timerMinutesString}:${timerSecondsString}`;
  };

  const timerTimeString = getTimerTimeString();

  return {
    timer,
    setTimer,
    resetTimer,
    getTimerMinutes,
    getTimerSeconds,
    getTimerTimeString,
    isTimerFinished,
    timerTimeString,
  };
};
