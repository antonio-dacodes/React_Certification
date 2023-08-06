/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputBaseComponentProps, TextField } from "@mui/material";
import React from "react";

interface InputProps {
  style?: React.CSSProperties;
  sx: object;
  id?: string;
  fullWidth?: boolean;
  label?: string;
  value?: string;
  variant?: "outlined";
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  color?: "primary";
  inputProps?: InputBaseComponentProps;
}

export const InputsLogin: React.FC<InputProps> = ({
  style,
  sx,
  id,
  fullWidth,
  label,
  value,
  variant,
  placeholder,
  onChange,
  onBlur,
  error,
  helperText,
  color,
  inputProps,
}) => {
  return (
    <TextField
      style={style}
      sx={sx}
      id={id}
      fullWidth={fullWidth}
      label={label}
      value={value}
      variant={variant}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      color={color}
      inputProps={inputProps}
    />
  );
};
