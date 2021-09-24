import React, { Fragment, FunctionComponent, ReactNode, useMemo } from 'react';
import MoreIcon from './../icons/MoreIcon';
import Button from './../Button';
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
    <Fragment>
      {
        title && (
          <h3 className="CardHeader-title text-extra-bold">{title}</h3>
        )
      }
      {
        optionsCallback && (
          <button>
            <MoreIcon />
          </button>
        )
      }
    </Fragment>
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