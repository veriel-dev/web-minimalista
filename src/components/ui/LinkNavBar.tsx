import React from 'react';
import { Button } from './Button';

interface Props {
  to: string;
  target?: string;
  children: React.ReactNode;
  variant?: 'ghost' | 'default' | 'outline' | 'subtle';
  isEmail?: boolean;
  isTel?: boolean;
  title: string;
  ariaLabel: string;
  className?: string;
}
export const LinkNavBar = ({
  to,
  target = '_blank',
  children,
  variant = 'ghost',
  isEmail = false,
  isTel = false,
  title,
  ariaLabel,
  className = '',
}: Props) => {
  return (
    <>
      {(isEmail || isTel) && (
        <a href={to} title={title}>
          <Button variant={variant} title={title} ariaLabel={ariaLabel} className={className}>
            {children}
          </Button>
        </a>
      )}
      {!isEmail && !isTel && (
        <a href={to} target={target} rel="noopener noreferrer" title={title}>
          <Button variant={variant} title={title} ariaLabel={ariaLabel} className={className}>
            {children}
          </Button>
        </a>
      )}
    </>
  );
};
