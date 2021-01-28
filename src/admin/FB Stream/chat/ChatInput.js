import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}>
        <div className="row">
          <div className="col-8">
            <input
            type="text"
            placeholder={'Enter message...'}
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
            />
          </div>
          <div className="col-4">
            <input type="submit" value={'Send'} />
          </div>
        </div>
      </form>
    )
  }
}

export default ChatInput