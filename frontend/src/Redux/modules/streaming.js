//import

import { actionCreators as userAction } from "./user";
import { toast } from "react-toastify";
//actions

const SET_FOLLOWINGS_STREAM = "SET_FOLLOWINGS_STREAM";
const SET_USERINFO_BY_STREAMKEY = "SET_USERINFO_BY_STREAMKEY";

//action creator
function setFollowingsStreaming(followingsStreaming) {
  return {
    type: SET_FOLLOWINGS_STREAM,
    followingsStreaming
  };
}

function setUserByStreamKey(userByStreamKey) {
  return {
    type: SET_USERINFO_BY_STREAMKEY,
    userByStreamKey
  };
}
//action API

function getFollowingsStreaming() {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch("/streaming/followings/", {
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
      .then(json => {
        dispatch(setFollowingsStreaming(json));
      })
      .catch(err => console.log(err));
  };
}

function getUserByStreamKey(streamKey) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/streaming/${streamKey}/find/`, {
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
      .then(json => dispatch(setUserByStreamKey(json)))
      .catch(err => console.log(err));
  };
}

function getStartStream(title, description, poster) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("poster", poster);
    fetch(`/streaming/start/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        Accept: "application/json, text/plain, */*"
      },
      body: formData
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userAction.logout());
        } else if (response.status === 304) {
          toast.success("이미 스트리밍이 실행중입니다😰");
        } else if (response.ok) {
          toast.success("스트리밍을 시작합니다😎");
        }
      })
      .catch(err => console.log(err));
  };
}

function getQuitStream(streamId) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/streaming/${streamId}/quit/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userAction.logout());
        } else if (response.ok) {
          toast.success("스트리밍을 종료합니다🙂");
        }
      })
      .catch(err => console.log(err));
  };
}

//initial State

const initialState = {
  streaming: []
};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOLLOWINGS_STREAM:
      return applyFollowingsStream(state, action);
    case SET_USERINFO_BY_STREAMKEY:
      return applySetUserByStreamKey(state, action);
    default:
      return state;
  }
}

//reducer function

function applyFollowingsStream(state, action) {
  const { followingsStreaming } = action;
  return {
    ...state,
    followingsStreaming
  };
}

function applySetUserByStreamKey(state, action) {
  const { userByStreamKey } = action;
  return {
    ...state,
    userByStreamKey
  };
}

//export

const actionCreators = {
  getFollowingsStreaming,
  getUserByStreamKey,
  getStartStream,
  getQuitStream
};

export { actionCreators };

//export default reducer
export default reducer;
