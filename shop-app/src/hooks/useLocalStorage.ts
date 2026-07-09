export function useLocalStorage<T>(key: string) {
  const load = (): T | null => {
    try {
      const storedValue = localStorage.getItem(key);

      if (!storedValue) return null;

      return JSON.parse(storedValue) as T;
    } catch {
      return null;
    }
  };

  const save = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return {
    load,
    save,
    remove,
  };
}
