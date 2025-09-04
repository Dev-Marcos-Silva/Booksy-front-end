import { useEffect, useState } from "react";

type StopWatchProps = {
  id: number; // identificador único do timer
};

export function StopWatch({ id }: StopWatchProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const storageKey = `stopwatch-${id}`;
    let expiration = localStorage.getItem(storageKey);

    if (!expiration) {
      // cria nova data de expiração (48h = 172800000 ms)
      const newExpiration = Date.now() + 48 * 60 * 60 * 1000;
      localStorage.setItem(storageKey, newExpiration.toString());
      expiration = newExpiration.toString();
    }

    const expirationTime = Number(expiration);

    const update = () => {
      const diff = expirationTime - Date.now();
      setTimeLeft(diff > 0 ? diff : 0);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [id]);

  // Converte milissegundos para h:m:s
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="flex justify-center">
      <div className="text-xl font-mono">
        {timeLeft > 0 ? formatTime(timeLeft) : "Expirado"}
      </div>
    </section>
  );
}