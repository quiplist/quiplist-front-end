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
      activeImg: '/img/like.png',
      active: 'Like',
    };

  }


  render() {
    return (
      <div className="feed"> 
        <a className="like-btn"> 
          <img src={this.state.activeImg} alt="emoji" className="active-emoji"/><h4>{this.state.active}</h4>
          <div className="reaction-box">
              <div className="reaction-icon" onClick={() => this.setState({ activeLike: !this.state.activeLike, 
              activeImg: '/img/like.png', activeLike: !this.state.activeLike, active: 'Like' })}>
                  {this.state.activeLike ? 
                    <div><img src="/img/like.png" alt="like"/><label>Liked</label></div> : 
                    <div><img src="/img/like.png" alt="like"/><label>Like</label></div> }
              </div>
              <div className="reaction-icon" onClick={() => this.setState({ activeHeart: !this.state.activeHeart, activeImg: '/img/heart.png', active: 'Love'  })}>
                  {this.state.activeHeart ? 
                    <div><img src="/img/heart.png" alt="love"/><label>{this.setLove}</label></div> : 
                    <div><img src="/img/heart.png" alt="love"/><label>Love</label></div> }
              </div>
              <div className="reaction-icon" onClick={() => this.setState({ activeHappy: !this.state.activeHappy, activeImg: '/img/happy.png' , active: 'Happy'})}>
                {this.state.activeHappy ? 
                <div><img src="/img/happy.png" alt="happy"/><label>Haha</label></div> : 
                <div><img src="/img/happy.png" alt="happy"/><label>Haha</label></div>}
              </div>
              <div className="reaction-icon" onClick={() => this.setState({ activeWow: !this.state.activeWow, activeImg: '/img/wow.png', active: 'Wow'})}>
                  {this.state.activeWow ? 
                  <div><img src="/img/wow.png" alt="wow"/><label>Wowed</label></div> : 
                  <div><img src="/img/wow.png" alt="wow"/><label>Wow</label></div>}
              </div>
              <div className="reaction-icon" onClick={() => this.setState({ activeSad: !this.state.activeSad, activeImg: '/img/sad.png', active: 'Sad'})}>
                  {this.state.activeSad ? 
                  <div><img src="/img/sad.png" alt="sad"/><label>Sad</label></div> : 
                  <div><img src="/img/sad.png" alt="sad"/><label>Sad</label></div>}
              </div>
              <div className="reaction-icon" onClick={() => this.setState({activeAngry: !this.state.activeAngry, activeImg: '/img/angry.png', active: 'Angry' })}>
                  {this.state.activeAngry ? 
                  <div><img src="/img/angry.png" alt="angry"/><label>Angry</label></div> : 
                  <div><img src="/img/angry.png" alt="angry"/><label>Angry</label></div>}
              </div>
          </div> 
        </a> 
      </div>
    );
  }
}

export default Reactions;
