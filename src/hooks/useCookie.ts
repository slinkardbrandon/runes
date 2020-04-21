import React from 'react';
import cookies from 'browser-cookies';

/**
 * useCookie - A hook for easy and magic cookies, I might turn this into an npm lib
 */
export function useCookie(
  // Yeaaaaaaaaaaaaaah
  cooKey: string,
  initialCookieValue: string,
): [string, (...args: any[]) => void] {
  const [item, setStateValue] = React.useState<string>(() => {
    /**
     * Set the initial state value to the cookie value. If no cookie value
     * exists, take the value passed to set as the initial cookie value.
     */
    return cookies.get(cooKey) || initialCookieValue;
  });

  /**
   * update the state AND cookie value
   */
  const setValue = (value: string) => {
    setStateValue(value);
    cookies.set(cooKey, value);
  };

  return [item, setValue];
}
