import React, { Component } from 'react';

class Reactions extends Component {
  constructor() {
    super();
    this.state = {
      activeLike: true,
      activeHeart: true,
      activeHappy: true,
      activeWow: true,
      activeSad: true,
      activeAngry: true,
    };
    this.setLikeIcon = this.setLikeIcon.bind(this);
    this.setLoveIcon = this.setLoveIcon.bind(this);
    this.setHahaIcon = this.setHahaIcon.bind(this);
    this.setWowIcon = this.setWowIcon.bind(this);
    this.setSadIcon = this.setSadIcon.bind(this);
    this.setAngryIcon = this.setAngryIcon.bind(this);
  }

  setLikeIcon = () => {
    this.setState({
      activeLike: !this.state.activeLike,
      activeHeart: true,
      activeHappy: true,
      activeWow: true,
      activeSad: true,
      activeAngry: true
    })

    var image = document.getElementById("activeEmoji");
    if(this.state.activeLike){
      image.src ="/img/active-like.png";
    }else{
      image.src ="/img/default-icon.png";

    }

    console.log("ACTIVE" + this.state.activeLike)
  }

  setLoveIcon = () => {
    
    this.setState({
      activeHeart: !this.state.activeHeart,
      activeLike: true,
      activeHappy: true,
      activeWow: true,
      activeSad: true,
      activeAngry: true
    })

    var image = document.getElementById("activeEmoji");
    if(this.state.activeHeart){
      image.src ="/img/active-heart.png";
    }else{
      image.src ="/img/default-icon.png";
    }
  }

  setHahaIcon = () => {
    this.setState({
      activeHappy: !this.state.activeHappy,
      activeLike: true,
      activeHeart: true,
      activeWow: true,
      activeSad: true,
      activeAngry: true
    })

    var image = document.getElementById("activeEmoji");
    if(this.state.activeHappy){
      image.src ="/img/active-laugh.png";
    }else{
      image.src ="/img/default-icon.png";
    }
  }

  setWowIcon = () => {
    this.setState({
      activeWow: !this.state.activeWow,
      activeLike: true,
      activeHeart: true,
      activeHappy: true,
      activeSad: true,
      activeAngry: true
    })

    var image = document.getElementById("activeEmoji");
    if(this.state.activeWow){
      image.src ="/img/active-wow.png";
    }else{
      image.src ="/img/default-icon.png";
    }
  }

  setSadIcon = () => {
    this.setState({
      activeSad: !this.state.activeSad,
      activeLike: true,
      activeHeart: true,
      activeHappy: true,
      activeWow: true,
      activeAngry: true
    })


    var image = document.getElementById("activeEmoji");
    if(this.state.activeSad){
      image.src ="/img/active-sad.png";
    }else{
      image.src ="/img/default-icon.png";
    }
  }

  setAngryIcon = () => {
    this.setState({
      activeAngry: !this.state.activeAngry,
      activeLike: true,
      activeHeart: true,
      activeHappy: true,
      activeWow: true,
      activeSad: true
    })

    var image = document.getElementById("activeEmoji");
    if(this.state.activeAngry){
      image.src ="/img/active-angry.png";
    }else{
      image.src ="/img/default-icon.png";
    }
  }

  render() {
    return (
      <div className="feed"> 
        <a className="like-btn"> 
          <img src="/img/default-icon.png" alt="emoji" className="active-emoji" id="activeEmoji"/>
          <div className="reaction-box">
              <div className="reaction-icon" onClick={this.setLikeIcon}>
                <img src="/img/active-like.png" alt="like"/><label>Like</label>
              </div>
              <div className="reaction-icon" onClick={this.setLoveIcon}>
                <img src="/img/active-heart.png" alt="Love"/><label>Love</label>
              </div>
              <div className="reaction-icon" onClick={this.setHahaIcon}>
                <img src="/img/active-laugh.png" alt="Haha"/><label>Haha</label>
              </div>
              <div className="reaction-icon" onClick={this.setWowIcon}>
                <img src="/img/active-wow.png" alt="Wow"/><label>Wow</label>
              </div>
              <div className="reaction-icon" onClick={this.setSadIcon}>
                <img src="/img/active-sad.png" alt="Sad"/><label>Sad</label>
              </div>
              <div className="reaction-icon" onClick={this.setAngryIcon}>
                <img src="/img/active-angry.png" alt="Angry"/><label>Angry</label>
              </div>
          </div> 
        </a> 
      </div>
    );
  }
}

export default Reactions;
