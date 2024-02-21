// Write your code here
import * as react from 'react'

import './index.css'

class ClickCounter extends react.Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous State value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> The Button has been clicked {count} times</h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement}>
          Click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
