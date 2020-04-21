import React from 'react';

export interface IExpandoProps {
  expanded?: boolean;
}

export const Expando: React.FunctionComponent<IExpandoProps> = ({
  expanded,
  children,
}) => {
  return expanded ? <div>{children}</div> : <div />;
};
