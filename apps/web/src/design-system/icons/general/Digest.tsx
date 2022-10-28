import React from 'react';

/* eslint-disable */
export function Digest(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${props.width} ${props.height}`} fill="none" {...props}>
      <path
        d="M1 19L12 25L23 19M1 13L12 19L23 13M12 1L1 7L12 13L23 7L12 1Z"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
