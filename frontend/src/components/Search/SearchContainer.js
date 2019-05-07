import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    searchUserList: PropTypes.array,
    searchVideoList: PropTypes.array
  };

  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchByTerm } = this.props;
    if (prevProps.match.params !== this.props.match.params) {
      searchByTerm();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { searchByTerm, pathname } = this.props;
    if (nextProps.searchUserList && nextProps.searchVideoList) {
      this.setState({
        loading: false
      });
    }
    if (nextProps.pathname !== pathname) {
      searchByTerm();
    }
  }

  render() {
    const { searchUserList, searchVideoList } = this.props;
    const { loading } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        userList={searchUserList}
        videoList={searchVideoList}
      />
    );
  }
}

export default SearchContainer;
