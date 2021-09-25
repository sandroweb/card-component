import { FunctionComponent } from "react";
import './style.css';

export interface PreloaderProps {
  hidden?: boolean;
  label: string;
}

const Preloader: FunctionComponent<PreloaderProps> = ({
  hidden,
  label,
}) => {
  return (
    <div className={`Preloader ${hidden ? 'Preloader-hidden' : ''}`}>
      <div className="Preloader-content">
        <div className="Preloader-ball"></div>
        <div className="Preloader-label">
          { label }
        </div>
      </div>
    </div>
  )
}

export default Preloader;