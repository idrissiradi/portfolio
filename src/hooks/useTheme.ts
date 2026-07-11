import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "idradi-theme";

const applyTheme = (t: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", t === "dark");
  root.classList.toggle("light", t === "light");
  root.style.colorScheme = t;
  try { localStorage.setItem(STORAGE_KEY, t); } catch { /* no-op */ }
};

/** Default: dark. Respects saved preference if any. */
export const initTheme = (): Theme => {
  let initial: Theme = "dark";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "light" || saved === "dark") initial = saved;
  } catch { /* no-op */ }
  applyTheme(initial);
  return initial;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => initTheme());

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
        applyTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return { theme, toggle, set: (t: Theme) => { setTheme(t); applyTheme(t); } };
};
