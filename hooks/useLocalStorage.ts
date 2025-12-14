"use client";

import { useState, useEffect, useCallback } from "react";

interface UseLocalStorageOptions<T> {
  key: string;
  defaultValue: T;
  validate?: (value: unknown) => value is T;
  onValueChange?: (value: T) => void;
}

export function useLocalStorage<T>({
  key,
  defaultValue,
  validate,
  onValueChange,
}: UseLocalStorageOptions<T>) {
  const [value, setValueState] = useState<T>(defaultValue);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      try {
        const parsed = JSON.parse(savedValue) as unknown;
        if (validate ? validate(parsed) : true) {
          setValueState(parsed as T);
          onValueChange?.(parsed as T);
        }
      } catch {
        // If JSON parse fails, try using raw string value
        if (validate ? validate(savedValue) : true) {
          setValueState(savedValue as T);
          onValueChange?.(savedValue as T);
        }
      }
    }
  }, [key, validate, onValueChange]);

  const setValue = useCallback(
    (newValue: T) => {
      setValueState(newValue);
      localStorage.setItem(
        key,
        typeof newValue === "string" ? newValue : JSON.stringify(newValue)
      );
      onValueChange?.(newValue);
    },
    [key, onValueChange]
  );

  return { value, setValue, mounted };
}
