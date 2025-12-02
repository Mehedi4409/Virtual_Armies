import React from 'react';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`mx-auto w-[70%] max-w-full ${className ? className : ''}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
