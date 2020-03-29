import React, { useState } from "react";

interface IButtonProps {
  variant?: "primary" | "outlined";
  text: string;
  onClick?: (...args: any[]) => void;
}

export const Button = ({
  variant = "primary",
  text,
  onClick
}: IButtonProps) => {
  const [classNames, setClassNames] = useState<string>();
  React.useEffect(() => {
    const classList = ["font-semibold", "py-2", "px-4", "rounded-full"];
    if (variant === "primary") {
      classList.push("bg-green-800", "hover:bg-green-900", "text-white");
    } else {
      classList.push(
        "bg-transparent",
        "hover:bg-green-800",
        "hover:text-white",
        "text-green-900",
        "border",
        "border-solid",
        "border-green-900"
      );
    }

    setClassNames(classList.join(" "));
  }, [variant]);

  return <button className={classNames}>{text}</button>;
};
