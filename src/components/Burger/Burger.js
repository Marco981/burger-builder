import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.css'

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient type={ingredient} key={ingredient + i} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger
