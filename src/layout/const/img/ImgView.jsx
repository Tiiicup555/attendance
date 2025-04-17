import React from 'react'
import './img.css'

export const ImgView = ({ children }) => {
  return (
    <div>
        <div className="img-content">
            <div className="ch-content">{ children }</div>
        </div>
        <div className="circle-background">
            <div className="circle circle-red-top-right"></div>
            <div className="circle circle-white-overlap"></div>
            <div className="circle circle-white-bottom-left"></div>
        </div>
    </div>
  )
}
