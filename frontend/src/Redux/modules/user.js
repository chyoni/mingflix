import { toast } from "react-toastify";
import { push } from "react-router-redux";
//import

//actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_PROFILE = "SET_PROFILE";
const SET_YOUR_PROFILE = "SET_YOUR_PROFILE";
const SEARCH_USER = "SEARCH_USER";
const SEARCH_VIDEO = "SEARCH_VIDEO";
const SEARCH_STREAMING = "SEARCH_STREAMING";
const SET_NOTIFICATION = "SET_NOTIFICATION";
const SET_UNFOLLOW = "SET_UNFOLLOW";
const SET_FOLLOW = "SET_FOLLOW";
const SET_CHANGE_PASSWORD = "SET_CHANGE_PASSWORD";
const SET_FOLLOWING_LIST = "SET_FOLLOWING_LIST";
const SET_FOLLOWER_LIST = "SET_FOLLOWER_LIST";
//action creator

function saveToken(json) {
  return {
    type: SAVE_TOKEN,
    json
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

function setProfile(json) {
  return {
    type: SET_PROFILE,
    json
  };
}
function setYourProfile(anonymousUser) {
  return {
    type: SET_YOUR_PROFILE,
    anonymousUser
  };
}
function setSearchUserList(searchUserList) {
  return {
    type: SEARCH_USER,
    searchUserList
  };
}
function setSearchVideoList(searchVideoList) {
  return {
    type: SEARCH_VIDEO,
    searchVideoList
  };
}

function setSearchStreamList(searchStreamingList) {
  return {
    type: SEARCH_STREAMING,
    searchStreamingList
  };
}

function setNotification(notices) {
  return {
    type: SET_NOTIFICATION,
    notices
  };
}
function setUnFollowUser(userId) {
  return {
    type: SET_UNFOLLOW,
    userId
  };
}
function setFollowUser(userId) {
  return {
    type: SET_FOLLOW,
    userId
  };
}

function setChangePassword() {
  return {
    type: SET_CHANGE_PASSWORD
  };
}

function setFollowingList(followingList) {
  return {
    type: SET_FOLLOWING_LIST,
    followingList
  };
}

function setFollowerList(followerList) {
  return {
    type: SET_FOLLOWER_LIST,
    followerList
  };
}
//API actions

function usernameLogin(username, password) {
  return dispatch => {
    fetch("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.token) {
          dispatch(saveToken(json));
        } else {
          toast.error("아이디 혹은 비밀번호가 틀립니다😥");
        }
      })
      .catch(err => console.log(err));
  };
}

function facebookLogin(access_token) {
  return dispatch => {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(username, password, email, name) {
  return dispatch => {
    fetch("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password1: password,
        password2: password,
        email,
        name
      })
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        if (json.token) {
          dispatch(saveToken(json));
        } else if (!json.token && json.username) {
          toast.error(json.username[0]);
        } else if (!json.token && json.email) {
          toast.error(json.email[0]);
        } else if (!json.token && json.password1) {
          toast.error(json.password1[0]);
        }
      })
      .catch(err => console.log(err));
  };
}

function createChannel(channel_name, channel_caption, stream_key) {
  return (dispatch, getState) => {
    const {
      users: { token, username }
    } = getState();
    fetch(`/users/${username}/channel/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        channel_name,
        channel_caption,
        stream_key
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => {
        if (json.id) {
          toast.success("채널이 생성되었습니다😘");
          setTimeout(() => {
            dispatch(push("/profile"));
          }, 2500);
        } else if (!json.id && json.channel_name) {
          toast.error(json.channel_name[0]);
        } else if (!json.id && json.stream_key) {
          toast.error(json.stream_key[0]);
        }
      })
      .catch(err => console.log(err));
  };
}

function getProfile() {
  return (dispatch, getState) => {
    const {
      users: { token, username }
    } = getState();
    fetch(`/users/${username}/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => dispatch(setProfile(json)));
  };
}

function getYourProfile(username) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/users/${username}/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => dispatch(setYourProfile(json)));
  };
}

function editInfo(profile_image, name, phone, channel_name, channel_caption) {
  return async (dispatch, getState) => {
    const {
      users: { token, username }
    } = getState();
    const editProfileRes = await editProfile(
      token,
      username,
      profile_image,
      name,
      phone
    );
    const editChannelRes = await editChannelInfo(
      token,
      username,
      channel_name,
      channel_caption
    );
    if (editProfileRes === 401 || editChannelRes === 401) {
      dispatch(logout());
    } else if (editProfileRes.id && editChannelRes.id) {
      toast.success("프로필이 수정되었습니다🤗");
      setTimeout(() => {
        dispatch(push("/profile"));
      }, 2500);
    }
  };
}

function editProfile(token, username, profile_image, name, phone) {
  let formData = new FormData();
  if (profile_image === null) {
    formData.append("name", name);
    formData.append("phone", phone);
  } else {
    formData.append("profile_image", profile_image);
    formData.append("name", name);
    formData.append("phone", phone);
  }
  return fetch(`/users/${username}/`, {
    method: "PUT",
    headers: {
      Authorization: `JWT ${token}`,
      Accept: "application/json, text/plain, */*"
    },
    body: formData
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => console.log(err));
}

function editChannelInfo(token, username, channel_name, channel_caption) {
  return fetch(`/users/${username}/channel/`, {
    method: "PUT",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      channel_name,
      channel_caption
    })
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(err => console.log(err));
}

function searchByTerm(searchTerm) {
  return async (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    const searchUserList = await searchUsers(token, searchTerm);
    const searchVideoList = await searchVideos(token, searchTerm);
    const searchStreamingList = await searchStreaming(token, searchTerm);
    if (
      searchUserList === 401 ||
      searchVideoList === 401 ||
      searchStreamingList === 401
    ) {
      dispatch(logout());
    }
    dispatch(setSearchUserList(searchUserList));
    dispatch(setSearchVideoList(searchVideoList));
    dispatch(setSearchStreamList(searchStreamingList));
  };
}

function searchUsers(token, searchTerm) {
  return fetch(`/users/search/?username=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

function searchVideos(token, searchTerm) {
  return fetch(`/videos/search/?search_term=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

function searchStreaming(token, searchTerm) {
  return fetch(`/streaming/search/?stream_search_term=${searchTerm}`, {
    headers: {
      Authorization: `JWT ${token}`
    }
  })
    .then(response => {
      if (response.status === 401) {
        return 401;
      }
      return response.json();
    })
    .then(json => json);
}

function getNotification() {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/notifications/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => dispatch(setNotification(json)));
  };
}

function followUser(userId) {
  return (dispatch, getState) => {
    dispatch(setFollowUser(userId));
    const {
      users: { token }
    } = getState();
    fetch(`/users/${userId}/follow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setUnFollowUser(userId));
      }
    });
  };
}

function unFollowUser(userId) {
  return (dispatch, getState) => {
    dispatch(setUnFollowUser(userId));
    const {
      users: { token }
    } = getState();
    fetch(`/users/${userId}/unfollow/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(logout());
      } else if (!response.ok) {
        dispatch(setFollowUser(userId));
      }
    });
  };
}

function changePassword(current_password, new_password) {
  return (dispatch, getState) => {
    const {
      users: { token, username }
    } = getState();
    fetch(`/users/${username}/password/`, {
      method: "PUT",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        current_password,
        new_password
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => dispatch(setChangePassword()))
      .catch(err => console.log(err));
  };
}

function getFollowingList(username) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/users/${username}/following/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFollowingList(json)))
      .catch(err => console.log(err));
  };
}

function getFollowersList(username) {
  return (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    fetch(`/users/${username}/followers/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logout());
        }
        return response.json();
      })
      .then(json => dispatch(setFollowerList(json)))
      .catch(err => console.log(err));
  };
}

//initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  username: localStorage.getItem("username")
};

//reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySaveToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case SET_PROFILE:
      return applySetProfile(state, action);
    case SEARCH_USER:
      return applySearchUser(state, action);
    case SEARCH_VIDEO:
      return applySearchVideo(state, action);
    case SEARCH_STREAMING:
      return applySearchStreaming(state, action);
    case SET_YOUR_PROFILE:
      return applySetYourProfile(state, action);
    case SET_NOTIFICATION:
      return applySetNotification(state, action);
    case SET_UNFOLLOW:
      return applySetUnFollow(state, action);
    case SET_FOLLOW:
      return applySetFollow(state, action);
    case SET_CHANGE_PASSWORD:
      return applySetChangePassword(state, action);
    case SET_FOLLOWING_LIST:
      return applySetFollowingList(state, action);
    case SET_FOLLOWER_LIST:
      return applySetFollowerList(state, action);
    default:
      return state;
  }
}

//reducer functions

function applySaveToken(state, action) {
  const {
    json: { token, user }
  } = action;
  localStorage.setItem("jwt", token);
  localStorage.setItem("username", user.username);
  return {
    ...state,
    isLoggedIn: true,
    token,
    user,
    username: user.username
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  return {
    ...state,
    isLoggedIn: false
  };
}

function applySetChangePassword(state, action) {
  return {
    ...state
  };
}

function applySetProfile(state, action) {
  const { json } = action;
  return {
    ...state,
    yourProfile: json
  };
}

function applySetYourProfile(state, action) {
  const { anonymousUser } = action;
  return {
    ...state,
    anonymousUser
  };
}
function applySearchUser(state, action) {
  const { searchUserList } = action;
  return {
    ...state,
    searchUserList
  };
}
function applySearchVideo(state, action) {
  const { searchVideoList } = action;
  return {
    ...state,
    searchVideoList
  };
}

function applySearchStreaming(state, action) {
  const { searchStreamingList } = action;
  return {
    ...state,
    searchStreamingList
  };
}

function applySetNotification(state, action) {
  const { notices } = action;
  return {
    ...state,
    notices
  };
}

function applySetUnFollow(state, action) {
  const { userId } = action;
  if (state.anonymousUser.id) {
    const { anonymousUser } = state;
    if (anonymousUser.id === userId) {
      const updateAmUser = {
        ...anonymousUser,
        is_following: false
      };
      return { ...state, anonymousUser: updateAmUser };
    } else {
      return { ...state, anonymousUser };
    }
  } else if (state.notices.length > 0) {
    const { notices } = state;
    const updateNoticeList = notices.map(notice => {
      if (notice.creator.id === userId) {
        return {
          ...notice,
          creator: {
            is_following: false
          }
        };
      }
      return notice;
    });
    return { ...state, notices: updateNoticeList };
  }
}
function applySetFollow(state, action) {
  const { userId } = action;
  if (state.anonymousUser.id) {
    const { anonymousUser } = state;
    if (anonymousUser.id === userId) {
      const updateAmUser = {
        ...anonymousUser,
        is_following: true
      };
      return { ...state, anonymousUser: updateAmUser };
    } else {
      return { ...state, anonymousUser };
    }
  } else if (state.notices.length > 0) {
    const { notices } = state;
    const updateNoticeList = notices.map(notice => {
      if (notice.creator.id === userId) {
        return {
          ...notice,
          creator: {
            is_following: true
          }
        };
      }
      return notice;
    });
    return { ...state, notices: updateNoticeList };
  }
}

function applySetFollowingList(state, action) {
  const { followingList } = action;
  return {
    ...state,
    followingList
  };
}

function applySetFollowerList(state, action) {
  const { followerList } = action;
  return {
    ...state,
    followerList
  };
}
//exports

const actionCreators = {
  usernameLogin,
  facebookLogin,
  createAccount,
  logout,
  getProfile,
  searchByTerm,
  getYourProfile,
  getNotification,
  followUser,
  unFollowUser,
  changePassword,
  getFollowingList,
  getFollowersList,
  createChannel,
  editInfo
};

//reducer export
export { actionCreators };

export default reducer;
