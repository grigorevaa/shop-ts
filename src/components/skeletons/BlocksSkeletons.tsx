import React from 'react';

interface Props {
  type: string;
}

export const BlocksSkeletons: React.FC<Props> = ({ type }) => {
  const className: string = 'b-s-' + type + ' skeleton';
  return <div className={className} />;
};
