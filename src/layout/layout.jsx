import React from 'react'
import { Sidebar } from './const/sidebar'


export const Layout = ({ children }) => {
  return (
    <div className="content">
        <Sidebar>
            {children}
        </Sidebar>
    </div>
  )
}

