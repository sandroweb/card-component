import { FunctionComponent, ReactNode } from "react";
import './style.css';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: Function;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button className="Button" onClick={onClick && (() => onClick())} disabled={disabled}>
      <span className="Button-label">
        { children }
      </span>
    </button>
  )
}

export default Button;