import React from "react";
import { RuneSystem } from "../classes/RuneSystem";
import { Select } from "./Select";

export interface IDropdown {
  options: RuneSystem[];
  onChange: (event: React.ChangeEvent) => void;
}

export const Dropdown = ({ options, onChange }: IDropdown) => {
  return (
    <div className="block w-full">
      <Select
        options={options.map(o => ({ name: o.name, value: o.name }))}
      ></Select>
    </div>
  );
};
