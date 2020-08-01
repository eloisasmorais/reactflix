import React from 'react';
import './ButtonLink.css';

const ButtonLink = ({ children, href }) => {
  return <a href={href}>{children}</a>;
};

export default ButtonLink;
