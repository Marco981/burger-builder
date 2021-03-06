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
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        key={control.label}
        label={control.label}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button
      disabled={!props.purchasable}
      onClick={props.ordered}
      className={styles.OrderButton}
    >
      ORDER NOW
    </button>
  </div>
)

export default buildControls
