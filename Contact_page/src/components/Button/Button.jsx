import React from 'react'
import styles from './Button.module.css'

const Button = ({isOutline, icon, text }) => {
  return (
    <button className={!isOutline ? styles.primary_btn : styles.outline_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button