import React from 'react'
import Input from './Input'
import Button from './Button'

const AppContainer = () => {
  return (
    <div className="appContainer">
      <h2>Make a Task!</h2>
      <form className="form">
        <Input />
      </form>
    </div>
  )
}

export default AppContainer
