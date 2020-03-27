import React from "react";
import { RuneSystem } from "../classes/RuneSystem";

export interface IDropdown {
  options: RuneSystem[];
  onChange: (event: React.ChangeEvent) => void;
}

export const Dropdown = ({ options, onChange }: IDropdown) => {
  return (
    <select
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={event => onChange(event)}
    >
      {options.map(({ name }) => (
        <option value={name} key={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
