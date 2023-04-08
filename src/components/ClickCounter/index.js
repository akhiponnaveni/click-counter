// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevstate => ({count: prevstate.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The button as been cliked <span className="hightlight">{count}</span>{' '}
          times
        </h1>

        <p className="paragraph">Click the button to increase the count!</p>

        <button className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
