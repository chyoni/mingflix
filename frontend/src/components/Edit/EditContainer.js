import React, { Component } from "react";
import EditPresenter from "./EditPresenter";
import PropTypes from "prop-types";

class EditContainer extends Component {
  state = {
    profileImage: null,
    name: "",
    phone: "",
    channelName: "",
    channelCaption: "",
    loading: true
  };

  static propTypes = {
    yourProfile: PropTypes.object,
    editInfo: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.yourProfile) {
      this.setState({
        loading: false,
        name: nextProps.yourProfile.name,
        phone: nextProps.yourProfile.phone,
        channelName: nextProps.yourProfile.channel
          ? nextProps.yourProfile.channel.channel_name
          : "",
        channelCaption: nextProps.yourProfile.channel
          ? nextProps.yourProfile.channel.channel_caption
          : ""
      });
    }
  };

  render() {
    const {
      profileImage,
      name,
      phone,
      channelName,
      channelCaption,
      loading
    } = this.state;
    const { yourProfile } = this.props;
    console.log(this.props);
    return (
      <EditPresenter
        yourProfile={yourProfile}
        profileImage={profileImage}
        name={name}
        phone={phone}
        channelName={channelName}
        channelCaption={channelCaption}
        loading={loading}
        updateProfile={this._updateProfile}
        handleInputChange={this._handleInputChange}
        handleProfileImage={this._handleProfileImage}
        goCreateChannelFunc={this._goCreateChannelFunc}
      />
    );
  }

  _updateProfile = () => {
    const {
      profileImage,
      name,
      phone,
      channelName,
      channelCaption
    } = this.state;
    const { editInfo } = this.props;
    editInfo(profileImage, name, phone, channelName, channelCaption);
  };

  _handleProfileImage = image => {
    this.setState({
      profileImage: image.target.files[0]
    });
  };

  _handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _goCreateChannelFunc = () => {
    const {
      history: { push }
    } = this.props;
    push("/create");
  };
}

export default EditContainer;
