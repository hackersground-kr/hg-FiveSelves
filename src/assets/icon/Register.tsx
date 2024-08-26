import React from 'react';
import { icon } from 'types/icon';

const Register = ({ color }: icon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M20.25 4.5H4.25C3.15 4.5 2.26 5.4 2.26 6.5L2.25 18.5C2.25 19.6 3.15 20.5 4.25 20.5H20.25C21.35 20.5 22.25 19.6 22.25 18.5V6.5C22.25 5.4 21.35 4.5 20.25 4.5ZM20.25 8.5L12.25 13.5L4.25 8.5V6.5L12.25 11.5L20.25 6.5V8.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Register;
