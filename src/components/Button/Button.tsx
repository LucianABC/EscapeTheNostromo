import React, { HTMLAttributes, useState } from "react";
import styles from './Button.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  ref?: any
}

const Button: React.FC<Props> = ({ children, ref, ...props }) => {
  const [updatedChildren, setUpdatedChildren] = useState(children);

  const handleMouseEnter = () => {
    ref.current.focus();
  }

  const handleFocus = () => {
    const _children = (<>
      <p>&gt;{children}<span className="blink">_</span></p>
    </>)
    setUpdatedChildren(_children);
  }

  const handleBlur = () => {
    setUpdatedChildren(children);
  }
  return (<button
    ref={ref}
    className={styles.button}
    onMouseEnter={handleMouseEnter}
    onFocus={handleFocus}
    onBlur={handleBlur} {...props}>
    {updatedChildren}
  </button>)
}

export default Button;