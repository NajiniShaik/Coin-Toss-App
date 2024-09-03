import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {randomValue: 0, heads: 0, tails: 0, total: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    console.log(tossResult)

    this.setState(prevState => ({
      randomValue: tossResult,
      heads: prevState.heads + (tossResult === 0 ? 1 : 0),
      tails: prevState.tails + (tossResult === 1 ? 1 : 0),
      total: prevState.total + 1,
    }))
  }

  render() {
    const {randomValue, heads, tails, total} = this.state

    const imgUrl = randomValue
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="bg-container">
        <div className="detailed-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="caption">Heads (or) Tails</p>
          <img src={imgUrl} className="coin-img" alt="toss result" />
          <button className="button" type="button" onClick={this.tossCoin}>
            Toss Coin
          </button>

          <ul className="result-card">
            <li>
              <p className="result">Total: {total}</p>
            </li>
            <li>
              <p className="result">Heads: {heads}</p>
            </li>
            <li>
              <p className="result">Tails: {tails}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
