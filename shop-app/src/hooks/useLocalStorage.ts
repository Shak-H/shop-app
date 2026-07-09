import { useCallback } from "react";

export function useLocalStorage<T>(key: string) {
  const load = useCallback((): T | null => {
    try {
      const storedValue = localStorage.getItem(key);

      if (!storedValue) return null;

      return JSON.parse(storedValue) as T;
    } catch {
      return null;
    }
  }, [key]);

  const save = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  const remove = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return {
    load,
    save,
    remove,
  };
}
