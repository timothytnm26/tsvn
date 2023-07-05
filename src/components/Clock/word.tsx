import React, { FC } from 'react';

interface WordProps {
  value: string;
  hidden?: boolean;
}

export const Word: FC<WordProps> = ({ value, hidden = false }) => {
  const getStyle = (): React.CSSProperties => {
    return {
      visibility: hidden ? 'hidden' : 'visible',
    };
  };

  return (
    <div className="digital">
      <p>{value}</p>
    </div>
  );
};