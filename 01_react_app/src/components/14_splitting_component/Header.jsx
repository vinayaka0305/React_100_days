import React from 'react'

const Header = ({id,content}) => {
  return (
    <div className={id}>{content}</div>
  )
}

export default Header