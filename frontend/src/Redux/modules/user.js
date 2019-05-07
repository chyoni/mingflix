//import

//actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_PROFILE = "SET_PROFILE";
const SEARCH_USER = "SEARCH_USER";
const SEARCH_VIDEO = "SEARCH_VIDEO";
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
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json));
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

function searchByTerm(searchTerm) {
  return async (dispatch, getState) => {
    const {
      users: { token }
    } = getState();
    const searchUserList = await searchUsers(token, searchTerm);
    const searchVideoList = await searchVideos(token, searchTerm);
    if (searchUserList === 401 || searchVideoList === 401) {
      dispatch(logout());
    }
    dispatch(setSearchUserList(searchUserList));
    dispatch(setSearchVideoList(searchVideoList));
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

function applySetProfile(state, action) {
  const { json } = action;
  return {
    ...state,
    yourProfile: json
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
//exports

const actionCreators = {
  usernameLogin,
  facebookLogin,
  createAccount,
  logout,
  getProfile,
  searchByTerm
};

//reducer export
export { actionCreators };

export default reducer;
