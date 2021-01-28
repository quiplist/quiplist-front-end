import React, { Component } from 'react'
import Chat from "./chat/Chat";
import Reactions from "./Reactions";

class FBStream extends Component {

  render() {
    return (
        <div className="container chat-live-wrapper">
            <div className="row">
                <div className="col col-8">
                  <div className="row">
                    <div className="col-12">
                        <div className="video-wrapper">
                          video
                        </div>
                    </div>
                    <div className="col-12">
                      <Reactions/>
                    </div>
                  </div>
                </div>
                <Chat/>
            </div>
        </div>
    )
  }
}

export default FBStream