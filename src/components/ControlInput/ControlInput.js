import React from 'react'

import styles from './ControlInput.module.css'

function ControlInput({label, ...props}) {
  return (
    <div className={styles.container}>
            {label && <label>{label}</label>}
      <input type="text" {...props}/>
    </div>
  )
}

export default ControlInput