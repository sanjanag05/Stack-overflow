import React from 'react'
import './Rightbar.css'
import Widget from './Widget'
import WidgetTag from './WidgetTag'

const Rightbar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget />
        <WidgetTag />
    </aside>
  )
}

export default Rightbar