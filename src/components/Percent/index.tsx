import { FunctionComponent } from "react";
import NumberFormat from "react-number-format";

export interface PercentProps {
  percent: number;
  className?: string;
}

const Percent: FunctionComponent<PercentProps> = ({
  percent,
  className,
}) => {
  return (
    <NumberFormat
      value={percent}
      fixedDecimalScale
      className={className}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      renderText={value => `${value}%`}
    />
  )
}

export default Percent;