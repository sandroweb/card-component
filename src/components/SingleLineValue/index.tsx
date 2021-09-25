import { FunctionComponent, ReactNode } from "react";
import './style.css';

export interface SingleLineValueProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const SingleLineValue: FunctionComponent<SingleLineValueProps> = ({
  label,
  children,
  className,
}) => {
  return (
    <div className={`SingleLineValue ${className || ''}`}>
      <div className="SingleLineValue-label">
        { label }
      </div>
      <div className="SingleLineValue-children text-bold">
        { children }
      </div>
    </div>
  )
}

export default SingleLineValue;