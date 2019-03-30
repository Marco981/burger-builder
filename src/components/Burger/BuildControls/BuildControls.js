import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = props => (
  <div className={styles.BuildControls}>
    {controls.map(control => (
      <BuildControl
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        key={control.label}
        label={control.label}
        disabled={props.disabled[control.type]}
      />
    ))}
  </div>
)

export default buildControls
