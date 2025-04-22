import React from 'react';
import { Sidebar } from './const/sidebar'; 

export const Layout = ({ children }) => {
  return (
    <div className="side-body">
      <Sidebar /> 
      <div className="side-right">{children}</div> 
    </div>
  );
};
