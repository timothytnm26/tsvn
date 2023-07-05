import React, { FC } from 'react';

interface NumberProps {
  value?: number;
}

export const Number: FC<NumberProps> = ({ value = 0 }) => {
  const result = String(value).padStart(2, '0');
  return (
    <div className="digital">
      <p>{result}</p>
    </div>
  );
};
