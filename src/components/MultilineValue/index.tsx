import { FunctionComponent, ReactNode } from "react";
import './style.css';

export interface MultilineValueProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const MultilineValue: FunctionComponent<MultilineValueProps> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={`MultilineValue ${className || ''}`}>
      <p className="MultilineValue-label text-medium">
        { label }
      </p>
      <span className="MultilineValue-value text-bold">
        { children }
      </span>
    </div>
  )
}

export default MultilineValue;