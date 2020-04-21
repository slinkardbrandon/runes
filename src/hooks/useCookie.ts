import React from 'react';
import cookies from 'browser-cookies';

/**
 * useCookie - A hook for easy and magic cookies, I might turn this into an npm lib
 */
export function useCookie(
  key: string,
  initialValue: string,
): [string, (...args: any[]) => void] {
  const [item, setInnerValue] = React.useState<string>(() => {
    return cookies.get(key) || initialValue;
  });

  const setValue = (value: string) => {
    setInnerValue(value);
    cookies.set(key, value);
  };

  return [item, setValue];
}
