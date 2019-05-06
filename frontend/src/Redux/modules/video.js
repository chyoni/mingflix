// import

import { actionCreators as userAction } from "./user";

// actions

const SET_HOT_VIDEOS = "SET_HOT_VIDEOS";
const FOLLOWINGS_VIDEO = "FOLLOWINGS_VIDEO";
// action creator

function setHotVideos(hotVideos) {
  return {
    type: SET_HOT_VIDEOS,
    hotVideos
  };
}

function setFollowingsVideos(followingsVideo) {
  return {
    type: FOLLOWINGS_VIDEO,
    followingsVideo
  };
}

//action API

function getHotVideos() {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch("/videos/hot/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userAction.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setHotVideos(json)));
  };
}

function getFollowingsVideos() {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch("/videos/followings/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userAction.logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFollowingsVideos(json)));
  };
}

// initial state

const initialState = {
  feed: []
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOT_VIDEOS:
      return applySetHotVideos(state, action);
    case FOLLOWINGS_VIDEO:
      return applyFollowingsVideos(state, action);
    default:
      return state;
  }
}

//reducer function

function applySetHotVideos(state, action) {
  const { hotVideos } = action;
  return {
    ...state,
    hotVideos
  };
}

function applyFollowingsVideos(state, action) {
  const { followingsVideo } = action;
  return {
    ...state,
    followingsVideo
  };
}

// export

const actionCreators = {
  getHotVideos,
  getFollowingsVideos
};

export { actionCreators };

// export default reducer
export default reducer;
