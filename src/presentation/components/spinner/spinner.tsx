import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const Spinner: React.FC<Props> = (props: Props) => {
  const strClass = [Styles.spinner, props.className].join(' ')

  return (
    <div className={strClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
