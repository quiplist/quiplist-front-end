import React, { Component } from 'react';

class Reactions extends Component {
  constructor() {
    super();
    this.state = {
      activeLike: false,
      activeHeart: false,
      activeHappy: false,
      activeWow: false,
      activeSad: false,
      activeAngry: false,
    };

  }


  render() {
    return (
      <div className="feed"> 
        <a className="like-btn">Like
          <div className="reaction-box">
              <div className={this.state.activeLike ? 'show' : 'reaction-icon'} onClick={() => this.setState({ activeLike: !this.state.activeLike })}>
                  <img src="/img/like.png" alt="like"/>
                  <label>Like</label>
              </div>
              <div className={this.state.activeHeart ? 'show' : 'reaction-icon'} onClick={() => this.setState({ activeHeart: !this.state.activeHeart })}>
                  <img src="/img/heart.png" className="img-fluid" alt="heart"/>
                  <label>Love</label>
              </div>
              <div className={this.state.activeHappy ? 'show' : 'reaction-icon'} onClick={() => this.setState({ activeHappy: !this.state.activeHappy })}>
                  <img src="/img/happy.png" className="img-fluid" alt="happy"/>
                  <label>Haha</label>
              </div>
              <div className={this.state.activeWow ? 'show' : 'reaction-icon'} onClick={() => this.setState({ activeWow: !this.state.activeWow })}>
                  <img src="/img/wow.png" className="img-fluid" alt="wow"/>
                  <label>Wow</label>
              </div>
              <div className={this.state.activeSad ? 'show' : 'reaction-icon'} onClick={() => this.setState({ activeSad: !this.state.activeSad })}>
                  <img src="/img/sad.png" className="img-fluid" alt="sad"/>
                  <label>Sad</label>
              </div>
              <div className={this.state.activeAngry ? 'show' : 'reaction-icon'} onClick={() => this.setState({activeAngry: !this.state.activeAngry })}>
                  <img src="/img/angry.png" className="img-fluid" alt="angry"/>
                  <label>Angry</label>
              </div>
          </div> 
        </a> 
      </div>
    );
  }
}

export default Reactions;
