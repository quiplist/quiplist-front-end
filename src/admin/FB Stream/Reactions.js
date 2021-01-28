import React, { Component } from 'react';


const URL = 'ws://localhost:3030'
class Reactions extends Component {
  constructor() {
    super();
    this.state = {
      countWow: 0,
      countLike: 0,
      countHeart: 0,
      countHaha: 0,
      countCry: 0,
      countAngry:0,
    };

  }


  render() {
    return (

      <div>
        <button className="btn-react" ws={this.ws} onClick={() => this.setState({ countLike: this.state.countLike + 1 })}>
          <img src="/img/like.png" className="img-fluid" alt="like"/>{this.state.countLike}
        </button>
        <button className="btn-react" onClick={() => this.setState({ countHeart: this.state.countHeart + 1 })}>
          <img src="/img/heart.png" className="img-fluid" alt="heart"/>{this.state.countHeart}
        </button>
        <button className="btn-react" onClick={() => this.setState({ countHaha: this.state.countHaha + 1 })}>
          <img src="/img/happy.png" className="img-fluid" alt="happy"/>{this.state.countHaha}
        </button>
        <button className="btn-react" onClick={() => this.setState({ countWow: this.state.countWow + 1 })}>
          <img src="/img/wow.png" className="img-fluid" alt="wow"/>{this.state.countWow}
        </button>
        <button className="btn-react" onClick={() => this.setState({ countCry: this.state.countCry + 1 })}>
          <img src="/img/sad.png" className="img-fluid" alt="sad"/>{this.state.countCry}
        </button>
        <button className="btn-react" onClick={() => this.setState({ countAngry: this.state.countAngry + 1 })}>
          <img src="/img/angry.png" className="img-fluid" alt="angry"/>{this.state.countAngry}
        </button>
      </div>
    );
  }
}

export default Reactions;
