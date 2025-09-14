export function startStopwatch(id: number, hours: number = 48) {
  const storageKey = `stopwatch-${id}`;
  const alreadyExists = localStorage.getItem(storageKey);

  if (!alreadyExists) {
    const expiration = Date.now() + hours * 60 * 60 * 1000; // horas → ms
    localStorage.setItem(storageKey, expiration.toString());
  }
}