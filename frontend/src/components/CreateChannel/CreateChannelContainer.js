import React, { Component } from "react";
import CreateChannelPresenter from "./CreateChannelPresenter";
import PropTypes from "prop-types";

class CreateChannelContainer extends Component {
  state = {
    channelName: "",
    channelCaption: "",
    streamKey: ""
  };

  static propTypes = {
    createChannel: PropTypes.func.isRequired
  };

  render() {
    const { channelName, channelCaption, streamKey } = this.state;
    return (
      <CreateChannelPresenter
        channelName={channelName}
        channelCaption={channelCaption}
        streamKey={streamKey}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = () => {
    const { createChannel } = this.props;
    const { channelName, channelCaption, streamKey } = this.state;
    createChannel(channelName, channelCaption, streamKey);
  };
}

export default CreateChannelContainer;
