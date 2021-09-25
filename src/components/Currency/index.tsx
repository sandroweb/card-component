import { FunctionComponent } from "react";
import NumberFormat from "react-number-format";

export interface CurrencyProps {
  currency: number;
  className?: string;
}

const Currency: FunctionComponent<CurrencyProps> = ({
  currency,
  className,
}) => {
  return (
    <NumberFormat
      value={currency}
      className={className}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      prefix="R$ "
    />
  )
}

export default Currency;