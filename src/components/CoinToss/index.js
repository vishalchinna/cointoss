import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {head: 0, tail: 0, active: true}

  changeTheSide = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const result = tossResult === 0
    if (result) {
      this.setState(prev => ({head: prev.head + 1}))
      this.setState({active: true})
    } else {
      this.setState(prev => ({tail: prev.tail + 1}))
      this.setState({active: false})
    }
  }

  render() {
    const {head, tail, active} = this.state
    console.log(active)
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {active ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="coin"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="coin"
              alt="tails"
            />
          )}

          <button className="btn" onClick={this.changeTheSide} type="button">
            Toss Coin
          </button>
          <div className="counting">
            <p>Total: {head + tail}</p>
            <p>Heads: {head}</p>
            <p>Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
