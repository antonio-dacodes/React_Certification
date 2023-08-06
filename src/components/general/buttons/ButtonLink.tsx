import { Button } from "@mui/material";

interface ButtonProps {
  id?: string;
  text: string;
  disabled?: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disableElevation?: boolean;
  style?: React.CSSProperties | undefined;
  variant?: "text" | "contained" | "outlined";
}

export const ButtonLink: React.FC<ButtonProps> = ({
  id,
  text,
  disabled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disableElevation,
  style,
  variant,
}) => {
  return (
    <Button
      id={id}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disableElevation={disableElevation}
      style={style}
      variant={variant}
    >
      {text}
    </Button>
  );
};
