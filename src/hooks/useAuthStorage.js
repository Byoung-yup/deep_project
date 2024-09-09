import { useCallback } from "react";

const useAuthStorage = () => {
  const setItem = useCallback(async (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback((key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }, []);

  const removeItem = useCallback(async (key) => {
    localStorage.removeItem(key);
  }, []);

  return { setItem, getItem, removeItem };
};

export default useAuthStorage;
