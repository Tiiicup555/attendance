import React from 'react'
import { TitleView } from './const/title'
import { ImgView } from './const/img'


export const Layout = ({ children }) => {
  return (
    <div className="content">
        <TitleView />
        <ImgView>
          { children }
        </ImgView>
    </div>
  )
}

