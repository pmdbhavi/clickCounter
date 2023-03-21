import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="con">
          <h1 className="heading">
            The Button has been clicked <span className="count">{count} </span>
            times
          </h1>
          <p className="para">Click the button to increase the count!</p>
          <button className="button" type="button" onClick={this.onClickButton}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
