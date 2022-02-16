import React, { FC } from 'react';

type Theme = 'dark' | 'light';

const getInitialTheme = (): Theme => {
  if (!typeof window) return;

  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      if (storedPrefs === 'dark') {
        return 'dark';
      } else if (storedPrefs === 'light') {
        return 'light';
      }
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) {
      return 'light';
    }
  }

  return 'dark'; // dark theme as the default;
};

export const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({ theme: 'dark', setTheme: () => {} });

export const ThemeProvider: FC<{ initialTheme: Theme }> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme);

  const rawSetTheme = (rawTheme: Theme) => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    const isLight = rawTheme === 'light';

    root.classList.remove(isLight ? 'dark' : 'light');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
