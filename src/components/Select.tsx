import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
} from '@material-ui/core';

interface ISelectProps {
  options: Array<{ value: string; name: string }>;
  onChange?: (...args: any[]) => void;
  value?: string;
  label: string;
  id?: string;
}

export const Select = (props: ISelectProps) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <MuiSelect
        native
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        inputProps={{ name: props.label, id: props.id }}
      >
        {props.options.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
