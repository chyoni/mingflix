import React, { Component } from "react";
import PropTypes from "prop-types";
import HistoryPresenter from "./HistoryPresenter";

class HistoryContainer extends Component {
  state = {
    loading: true
  };

  static propTypes = {
    myHistory: PropTypes.array,
    getMyHistory: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getMyHistory } = this.props;
    getMyHistory();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.myHistory) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { myHistory } = this.props;
    const { loading } = this.state;
    return <HistoryPresenter myHistory={myHistory} loading={loading} />;
  }
}

export default HistoryContainer;
