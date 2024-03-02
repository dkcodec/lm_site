import React from "react";

interface inputLogRegProps {
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}

const inputLogReg = ({
  className,
  type,
  name,
  id,
  placeholder,
}: inputLogRegProps) => {
  return (
    <input
      type={type}
      name={name}
      className={className}
      id={id}
      required
      placeholder={placeholder}
    />
  );
};

export default inputLogReg;
