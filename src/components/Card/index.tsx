import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import Button from './../Button';
import MoreIcon from './../icons/MoreIcon';
import './style.css';

export interface CardAction {
  label: string;
  callback: Function;
  disabled?: boolean;
}

export interface CardHeaderProps {
  title?: string;
  optionsCallback?: Function;
}

export const CardHeader: FunctionComponent<CardHeaderProps> = ({
  title,
  optionsCallback,
}) => {
  return (
    <div className="CardHeader">
      {
        title && (
          <h3 className="CardHeader-title text-extra-bold">{title}</h3>
        )
      }
      {
        optionsCallback && (
          <button className="CardHeader-optionButton" onClick={() => optionsCallback()}>
            <MoreIcon />
          </button>
        )
      }
    </div>
  )
}

export interface CardFooterProps extends CardAction {
}

export const CardFooter: FunctionComponent<CardFooterProps> = ({
  label,
  callback,
  disabled,
}) => {
  return (
    <div className="CardFooter">
      <Button onClick={() => callback()} disabled={disabled}>
        { label }
      </Button>
    </div>
  )
}

export interface CardProps extends CardHeaderProps {
  children: ReactNode;
  action?: CardAction;
}

const Card: FunctionComponent<CardProps> = ({
  title,
  optionsCallback,
  children,
  action,
}) => {

  const header = useMemo<ReactNode | false>(() => {
    return (title || optionsCallback) && <CardHeader { ...{ title, optionsCallback }} />;
  }, [title, optionsCallback])

  const footer = useMemo<ReactNode | false>(() => {
    return !!action && <CardFooter {...action} />;
  }, [action])

  return (
    <div className="Card">
      { header }
      <div className="CardContent">
        { children }
      </div>
      { footer }
    </div>
  )
}

export default Card;