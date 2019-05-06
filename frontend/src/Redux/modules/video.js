// import

import { actionCreators as userAction } from "./user";

// actions

const SET_HOT_VIDEOS = "SET_HOT_VIDEOS";
const FOLLOWINGS_VIDEO = "FOLLOWINGS_VIDEO";
const SET_VIDEO = "SET_VIDEO";
const LIKE_VIDEO = "LIKE_VIDEO";
const CANCEL_LIKE_VIDEO = "CANCEL_LIKE_VIDEO";
const ADD_COMMENT = "ADD_COMMENT";
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

function setVideo(video) {
  return {
    type: SET_VIDEO,
    video
  };
}

function doLikeVideo(videoId) {
  return {
    type: LIKE_VIDEO,
    videoId
  };
}

function doCancelLikeVideo(videoId) {
  return {
    type: CANCEL_LIKE_VIDEO,
    videoId
  };
}

function addComment(videoId, comment) {
  return {
    type: ADD_COMMENT,
    videoId,
    comment
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

function getVideo(videoId) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/videos/${videoId}/`, {
      method: "GET",
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
      .then(json => dispatch(setVideo(json)));
  };
}

function likeVideo(videoId) {
  return (dispatch, getState) => {
    dispatch(doLikeVideo(videoId));
    const {
      users: { token }
    } = getState();
    fetch(`/videos/${videoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userAction.logout());
      } else if (!response.ok) {
        dispatch(doCancelLikeVideo(videoId));
      }
    });
  };
}

function cancelLikeVideo(videoId) {
  return (dispatch, getState) => {
    dispatch(doCancelLikeVideo(videoId));
    const {
      users: { token }
    } = getState();
    fetch(`/videos/${videoId}/cancellikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userAction.logout());
      } else if (!response.ok) {
        dispatch(doLikeVideo(videoId));
      }
    });
  };
}

function commentVideo(videoId, message) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/videos/${videoId}/comments/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userAction.logout());
        }
        return response.json();
      })
      .then(json => {
        if (json.message) {
          dispatch(addComment(videoId, json));
        }
      });
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
    case SET_VIDEO:
      return applySetVideo(state, action);
    case LIKE_VIDEO:
      return applyLikeVideo(state, action);
    case CANCEL_LIKE_VIDEO:
      return applyCancellikeVideo(state, action);
    case ADD_COMMENT:
      return applyAddComment(state, action);
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

function applySetVideo(state, action) {
  const { video } = action;
  return {
    ...state,
    video
  };
}

function applyLikeVideo(state, action) {
  const { videoId } = action;
  const { video } = state;
  if (video.id === videoId) {
    const updateVideo = {
      ...video,
      is_liked: true,
      like_count: video.like_count + 1
    };
    return { ...state, video: updateVideo };
  } else {
    return { ...state, video };
  }
}

function applyCancellikeVideo(state, action) {
  const { videoId } = action;
  const { video } = state;
  if (video.id === videoId) {
    const updateVideo = {
      ...video,
      is_liked: false,
      like_count: video.like_count - 1
    };
    return { ...state, video: updateVideo };
  } else {
    return { ...state, video };
  }
}

function applyAddComment(state, action) {
  const { videoId, comment } = action;
  const { video } = state;
  if (video.id === videoId) {
    const updateVideo = {
      ...video,
      comments: [...video.comments, comment]
    };
    return { ...state, video: updateVideo };
  } else {
    return { ...state, video };
  }
}
// export

const actionCreators = {
  getHotVideos,
  getFollowingsVideos,
  getVideo,
  likeVideo,
  cancelLikeVideo,
  commentVideo
};

export { actionCreators };

// export default reducer
export default reducer;
